import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../axios-client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { GifLoader, LargeLoader } from "../components/Loading";
import { CollectionBoxItems } from "../components/CollectionList";
import { ErrorAlert, SuccessAlert } from "../components/Alerts";

const Nft = () => {
    const {id, address} = useParams();
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [bid, setBid] = useState([])
    const [pending, setPending] = useState([])
    useEffect(() => {
        const fetchNFT = async (id) => {
            const param = {
                id:id
            }
            axiosClient.post('/nft', param)
            .then(({data}) => {
                setData(data)
                setLoaded(true)
            })
            .catch(err => {
                const response = err.response
                if (response && response.status == 422){
                    console.log(response.data.errors)
                }
            })
        }
        const fetchBid = async () => {
            axiosClient.get(`/bids/retrieve?id=${id}`)
            .then(({data}) => {
                setBid(data)
            })
            .catch(err => {
                const response = err.response
                if (response && response.status == 422){
                    console.log(response.data.errors)
                }
            })
        }
        const fetchPending = async () => {
            axiosClient.get(`/bids/retrieve?status=pending&id=${id}`)
            .then(({data}) => {
                setPending(data)
            })
            .catch(err => {
                const response = err.response
                if (response && response.status == 422){
                    console.log(response.data.errors)
                }
            })
        }
        fetchPending();
        fetchBid()
        fetchNFT(id)
    }, [])
    const updateBid = async (id, status, nft_id, user_id, amount) => {
        const param = {
            id:id,
            status: status,
            nft_id: nft_id,
            user_id: user_id,
            amount: amount
        }
        axiosClient.post('/bids/update', param)
        .then(({data}) => {
        })
        .catch(err => {
            const response = err.response
            if (response && response.status == 422){
                console.log(response.data.errors)
            }
        })
    }
    const accept = (event, id, nft_id, user_id, amount) => {
        const bid_id = id;
        event.target.parentElement.parentElement.style.display="none";
        updateBid(bid_id, "Accepted", nft_id, user_id, amount)
    }
    const reject = (event, id, nft_id, user_id, amount) => {
        const bid_id = id;
        event.target.parentElement.parentElement.style.display="none";
        updateBid(bid_id, "Rejected", nft_id, user_id, amount)
    }
    const [success, setSuccess] = useState({display:"none"});
    const [error, setError] = useState({display:"none"})
    const placeBid = (e) => {
        let formData = new FormData(e.target.parentElement);
        e.target.innerHTML = "Placing...";
        axiosClient.post("/bids/place", formData)
        .then(({data}) => {
            e.target.innerHTML = "Place a Bid";
            if (JSON.parse(data).status){
                setSuccess({display:"block"})
            }else{
                setError({display:"block"})
            }
        })
        .catch(err => {
            const response = err.response
            if (response && response.status == 422){
                console.log(response.data.errors)
            }
        })

    }
    return (
        <>
        <main>
            <Nav />
            <div className="container mt-3">
                <SuccessAlert style={success} message="Bid Placed Successfully!" link={`/my-wallet/${localStorage.address}`} linkText="Go to wallet"/>
                <ErrorAlert style={error} message="Error Placing Bid! Please Try Again Later."/>
                {(loaded) ?
                    (localStorage.address && address == localStorage.address) ?
                        <div>
                            <h5>Pending Bids</h5>
                            {(pending.length == 0) ? <div>There are no pending bids</div>
                            :
                            <div>
                                {pending.map((value) => 
                                <div id={value['id']} className={`mt-3 alert py-1 fw-bold`} style={{ gap:"10px", fontSize:"14px", background:"#f5f5f5", borderRadius:"3px", border:'1px solid lightgrey', maxWidth:"400px", display:"flex" }}>
                                    <div className="my-auto">
                                        {value['amount']} ETH
                                    </div>
                                    <button onClick={(e) => accept(e, value['id'], value['nft_id'], value['user_id'], value['amount'])} role="button" className="p-0 px-2 ms-auto my-auto bi bi-check-lg" style={{ background:"transparent", color:"green" }}></button>
                                    <button onClick={(e) => reject(e, value['id'], value['nft_id'], value['user_id'], value['amount'])} role="button" className="p-0 px-2 my-auto bi bi-x-lg" style={{ background:"transparent", color:"red" }}></button>
                                </div>
                                )}    
                            </div>
                            }
                        </div>
                        :
                        (localStorage.wallet) ? 
                        <form className="d-flex mt-3 input-group" style={{ 'maxWidth':'350px' }}>
                            <input name="bid" className="form-control outline-none shadow-none " placeholder="Place a Bid"/>
                            <input type="hidden" name="address" value={localStorage.address}/>
                            <input type="hidden" name="id" value={id} />
                            <button type="button" onClick={placeBid} className="form-control shadow-none">Place Bid</button>
                        </form>
                        :
                        <form className="d-flex mt-3 input-group" style={{ 'maxWidth':'350px' }}>
                            <input className="form-control outline-none shadow-none " placeholder="Place a Bid"/>
                            <button type="button" role="button" onClick={() => connect(this)} className="form-control shadow-none" style={{ flex:"1 0 auto" }}>Place a bid</button>
                        </form>
                    :
                    <GifLoader />
                }
                <div className="m-lg-4">
                    <div className="mt-4 mt-sm-5">
                        <div className="d-flex flex-nowrap overflow-auto m-auto mt-3" style={{ 'maxWidth':'90vw' }}>
                            {loaded
                                ? (data.map((value) => 
                                <div className="card mx-2 box-items" style={{ "minWidth":"250px" }}>
                                <img className="card-img-top" style={{ "height":"250px" }} src={`${import.meta.env.VITE_API_BASE_URL}/public/${value['image']}`} alt=""/>
                                <div className="card-body">
                                    <div className="text-capitalize fs-6 fw-bold my-auto">In {value['collection']}'s Collection</div>
                                </div>
                                    
                                
                                <div className="card-footer">
                                    <div className="row">
                                        <div className={`col-4 me-auto`} style={{ "fontSize":"14px" }}>
                                            <div className="col-12 fw-normal">
                                                Floor
                                            </div>
                                            <div className="col-12 fw-bold">
                                                {value['floor']} ETH
                                            </div>
                                        </div>
                                        <div className="col-4" style={{ "fontSize":"14px" }}>
                                                <div className="col-12 fw-normal">
                                                    Bids
                                                </div>
                                                <div className="col-12 fw-bold">
                                                    {value['bids']}
                                                </div>
                                            </div>
                                        <div className={`col-4 ms-auto`} style={{ "fontSize":"14px" }}>
                                            <div className="col-12 fw-normal">
                                                Volume
                                            </div>
                                            <div className="col-12 fw-bold">
                                                {`${value['volume']/1000}K`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                ))
                                : (<LargeLoader />)}
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h4>Recent Bids</h4>
                    <hr/>
                {(loaded) ? 
                    <div>
                        {(bid.length == 0) ?
                        <div>Be the first to place a bid!</div>
                        :
                        <div className="row">
                            {bid.map((value) => 
                            <div className="mb-1" style={{ color:"#777777" }}>
                                bid {value['id']} <span className="fw-bold">{(value['accepted']) ? "Accepted" : "Not Accepted or Pending"}</span>
                            </div>
                            )}
                        </div>
                        }
                    </div>                    
                    :
                    <GifLoader />
                }
                </div>
            </div>
            <Footer />
        </main>
        </>
    )
}

export default Nft