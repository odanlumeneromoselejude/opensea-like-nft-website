import React, { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import Nav, { Search } from '../components/Nav'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CollectionItems, { CollectionBoxItems, CollectionHeader } from "../components/CollectionList"
import axiosClient from "../axios-client"
import { GifLoader, LargeLoader, MediumLoader, SmallLoader } from "../components/Loading"
import { ClaimDialog, Dialog } from "../components/Modals"

const Index = () => {
    const [data, setData] = useState([])
    const [bids, setBids] = useState([])
    const [trends, setTrends] = useState([])
    const [arts, setArts] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const fetchCollections = async (type, state) => {
            const params = {
                type: type
            }
            axiosClient.post('/collections', params)
            .then(({data}) => {
                state(data)
                setLoaded(true)
            })
            .catch(err => {
                const response = err.response
                if (response && response.status == 422){
                    console.log(response.data.errors)
                }
            })
        }
        fetchCollections('popular', setData)
        fetchCollections('bids', setBids)
        fetchCollections('trends', setTrends)
        fetchCollections('arts', setArts)
    }, [])
    let count = 1;
    return(
        <div>
        <main>        
            <div style={{ 'backgroundImage':'linear-gradient(grey, white)' }}>
                <Nav />
                <div className="p-3 m-0">
                    <div className="d-md-none">
                        <Search />
                    </div>
                    <div style={{ 'height':'50vh', "backgroundImage":"url(assets/nft.webp)", 'backgroundRepeat':'no-repeat', 'backgroundPosition':'center', 'backgroundSize':'cover' }} 
                    className="card border my-3 m-lg-4 mt-lg-3 rounded-5 text-light fw-bold position-relative">
                        <div className="card-body position-absolute bottom-0">
                            <div className="my-2 bg-dark px-3 py-3 rounded-5 text-center">
                                {(loaded) ?
                                    data.map((value) => 
                                        <div>
                                            <h3 className="card-title">{value['name']}</h3>
                                            <p className="card-text">Creator: {value['creator']} <i className="bi bi-patch-check-fill"></i></p>
                                            <a href={`/collection/${value['name']}`} className="btn btn-lg px-4 btn-primary fw-bold mt-auto">Explore <FontAwesomeIcon icon={['fas', 'fa-compass']}/></a>
                                        </div>
                                    )[0]
                                    :
                                    <GifLoader />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="top-collection" className="container-fluid">
                <div className="mx-lg-4">
                    <div className="mt-3 mt-sm-3">
                        <CollectionHeader type="Top Collections"/>
                        <div className="row">
                            {loaded 
                            ? (data.map((value) => 
                                <CollectionItems key={value['id']} count={count++} value={value} />
                            )) 
                            : (<SmallLoader />)
                            }
                            
                        </div>
                    </div>
                </div>
                <div id="live-bidding" className="m-lg-4">
                    <div className="mt-4 mt-sm-5">
                        <CollectionHeader icon={<i className="bi bi-stop-circle me-2"></i>} title="none" type="Live Bidding"/>
                        <div className="d-flex flex-nowrap overflow-auto m-auto mt-3" style={{ 'maxWidth':'90vw' }}>
                                {loaded
                                ? (bids.map((value) => 
                                    <CollectionBoxItems key={value['id']} type="live" value={value} />
                                ))
                                :
                                (<LargeLoader />)}
                        </div>
                    </div>
                </div>
                <div className="m-lg-4">
                    <div className="mt-4 mt-sm-5">
                        <CollectionHeader title="none" type="Popular in Arts"/>
                        <div className="d-flex flex-nowrap overflow-auto m-auto mt-3" style={{ 'maxWidth':'90vw' }}>
                                {loaded
                                ? (arts.map((value) => 
                                    <CollectionBoxItems key={value['id']} value={value} />
                                ))
                                : (<LargeLoader />)}
                        </div>
                    </div>
                </div>
                <div id="trending-collection" className="m-lg-4">
                    <div className="mt-4 mt-sm-5">
                        <CollectionHeader type="Trending"/>
                        <div className="row">
                            {loaded
                            ? (trends.map((value) => 
                                <CollectionItems key={value['id']} count={count++} value={value} />
                            ))
                            : (<SmallLoader />)
                            }
                        </div>
                    </div>
                </div>
                <div className="m-lg-4">
                    <div className="my-4 my-sm-5">
                        <CollectionHeader title="none" type="Categories"/>
                        <div className="d-flex flex-nowrap overflow-auto m-auto mt-3" style={{ 'maxWidth':'90vw' }}>
                                {loaded
                                ? (data.map((value) => 
                                    <CollectionBoxItems key={value['id']} type="category" count={count++} value={value} />
                                ))
                                : (<MediumLoader />)}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div style={{ 'height':'50vh', "backgroundImage":"url(assets/nft.png)", 'backgroundRepeat':'no-repeat', 'backgroundPosition':'center', 'backgroundSize':'cover' }} 
                        className="card border shadow my-3 m-lg-4 mt-3 rounded text-light fw-bold position-relative">
                        <div className="card-body bg-danger bg-opacity-20 rounded position-absolute bottom-0">
                            <div className="my-2 bg-transparent px-3 py-3 rounded-5 text-center">
                                <h3 className="card-title">Live auction ended</h3>
                                <p className="card-text">Time Left: 0s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        {(localStorage.wallet) ? null : <ClaimDialog />}
        
        </div>
    )
}
export default Index