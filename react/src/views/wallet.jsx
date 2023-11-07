import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav, { Search } from "../components/Nav";
import axiosClient from "../axios-client";
import { GifLoader } from "../components/Loading";
import { CollectionBoxItems } from "../components/CollectionList";

const Wallet = () => {
    const {walletId} = useParams()
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [nfts, setNfts] = useState([])
    useEffect(() => {
        const fetchData = () => {
            axiosClient.get(`/mywallet?address=${walletId}`)
            .then(({data}) => {
                setData(data)
                /**if (data.length == 0){
                    window.location.href="/";
                }**/
            })
            .catch(err => {
                const response = err.response
                if (response && response.status == 422){
                    console.log(response.data.errors)
                }
            })
        }
        const fetchNFTS = () => {
            axiosClient(`/nfts?address=${walletId}`)
            .then(({data}) => {
                setNfts(data)
                setLoaded(true)
                /**if (data.length == 0){
                    window.location.href="/";
                }**/
            })
            .catch(err => {
                const response = err.response
                if (response && response.status == 422){
                    console.log(response.data.errors)
                }
            })
        }
        fetchNFTS()
        fetchData()
    }, [])
    return(
        <div className="vw-100">
            <Nav />
            <div className="p-3 m-0 my-auto" style={{ display:"flex", gap:"1rem" }}>
                <div style={{ flex:"1" }} className="d-md-none">
                    <Search />
                </div>
                <div className="my-auto fw-bold fs-5 py-1 px-3" style={{ background:"#f3f3f3" }}>
                    <div>{data.map((value) => (value['wallet_balance'] == null) ? "0.00" : value['wallet_balance'])} ETH</div>
                </div>
            </div>
            <div className="container">
                <div>
                    {(loaded) ? 
                    <div>
                        {data.map((value) => <div>{(value['address']).split("").slice(0, 4).map((add) => add)}...{(value['address']).split("").slice(value['address'].length-5, value['address'].length).map((add) => add)} {(value['verified']) ? <i className="bi bi-patch-check-fill my-auto text-primary my-auto"></i> : null}</div>)}
                        <a href="/nft/create"><div className="mt-3">Create new NFT</div></a>
                        <div className="mt-3">
                            <h4>NFTS</h4>
                            <div className="d-flex flex-nowrap overflow-auto m-auto mt-3" style={{ 'maxWidth':'90vw' }}>
                                {(nfts.length > 0) ? 
                                nfts.map((value) => 
                                <div className="position-relative">
                                    <CollectionBoxItems key={value['id']} value={value} />
                                    <div style={{ width:"60px", right:"0", bottom:"10px", right:"15px" }} className="badge bg-dark position-absolute">{value['bids']} bids</div>
                                </div>
                                ) :
                                <div>No Nft(s) Found!</div>
                                }
                            </div>
                        </div>
                    </div>
                     : 
                    <GifLoader />
                    }
                </div>
            </div>
        </div>
    )
}

export default Wallet