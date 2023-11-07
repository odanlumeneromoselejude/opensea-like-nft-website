import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axiosClient from "../axios-client";
import CollectionItems, { CollectionBoxItems, CollectionHeader } from "../components/CollectionList"
import { LargeLoader, MediumLoader, SmallLoader } from "../components/Loading"
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Collection = () => {
    const {name} = useParams();
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchCollectionData = async (name) => {
            const param = {
                param:name
            }
            axiosClient.post("/collection", param)
            .then(({data}) => {
                setData(data);
                setLoaded(true);
            })
            .catch(err => {
                const response = err.response
                if (response && response.status == 422){
                    console.log(response.data.errors)
                }
            })
        }
        fetchCollectionData(name);
    }, [])
    return(
        <>
        <main>
            <Nav />
            <div className="container">
                <button onClick={() => window.location.href="/nft/create"} className="mt-3 shadow border"><i className="bi bi-plus-square-fill"></i> Add to Collection</button>
                <div className="m-lg-4">
                    <div className="mt-4 mt-sm-5">
                    <h3 className={`my-auto fw-bold`} id="top-collection">Popular in {name}</h3>
                        <div className="d-flex flex-nowrap overflow-auto m-auto mt-3" style={{ 'maxWidth':'90vw' }}>
                            {loaded
                                ? (data.map((value) => 
                                    <CollectionBoxItems key={value['id']} value={value} />
                                ))
                                : (<LargeLoader />)}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
        </>
    )
}
export default Collection