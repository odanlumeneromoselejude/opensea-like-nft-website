import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import axiosClient from "../axios-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toast from "../components/Modals"
import { ErrorAlert, SuccessAlert } from "../components/Alerts";

const Create = () => {
    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchCollections = async () => {
            axiosClient.get('/collections')
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
        fetchCollections();
    }, [])
    const [style, setStyle] = useState({display:"none"})
    const [error, setError] = useState({display:"none"})
    const createNft = (e) => {
        let formData = new FormData(e.target.parentElement);
        //console.log(formData.get("file"))
        e.target.innerHTML = "Please wait...";
        e.target.style.opacity="0.5"
        e.target.disabled=true;
         axiosClient.post('/nft/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
         })
         .then(({data}) => {
            e.target.innerHTML = "Create NFT";
            e.target.style.opacity="1"
            e.target.disabled=false;
            if (JSON.parse(data).status){
                setStyle({display:"block"})
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
    const setFile = (e) => {
        const [file] = e.target.files;
        if (file) {
            document.getElementById('preview').src = URL.createObjectURL(file);
        }
    }
    return(
        <div className="vw-100">
        <Nav/>
        <div className="container mt-5">
            <form method="post" action="" className="row m-2" style={{ maxWidth:"500px" }}>
                <SuccessAlert style={style} message="NFT Created Successfully!" link={`/my-wallet/${localStorage.address}`} linkText="Go to wallet"/>
                <ErrorAlert style={error} message="An Error Occurred! Please Try Again Later."/>
            {(!localStorage.wallet) ?
                <div class="alert alert-danger" role="alert">
                    Please <a onClick={() => connect(this)} href="#" className="alert-link">Connect your Wallet</a> to continue.
                </div>
                : null
            }
                <div className="card box-items position-relative w-100" style={{ maxWidth:"250px", height:"280px" }} role="button">
                    <div className="m-auto fw-bold text-center">
                        <FontAwesomeIcon icon="fa-solid fa-upload" bounce size="2xl" />
                        <div className="mt-3">Upload Image</div>
                    </div>
                    <img style={{ width:"100%", maxWidth:"250px", height:"280px" }} className="position-absolute fixed-top" id="preview"/>
                    <input onChange={setFile} id="file" className="position-absolute opacity-0 fixed-top fixed-bottom" name="file" type="file" role="button"/>
                </div>
                <select role="button" className="mt-3 p-2 rounded fw-bold" style={{ border:"1px solid lightgrey", color:"#777777" }} name="collection">
                    <option>{(loaded) ? 'Select Collection' : 'Loading Collections'}</option>
                    {(loaded) ? (                    
                    data.map((value) => 
                        <option>{value['name']}</option>
                    )) : 
                    (null)
                    }
                    <option>Others</option>
                </select>
                <input style={{ border:"1px solid lightgrey" }} className="mt-3 p-2 rounded fw-bold" inputMode="decimal" name="floor" placeholder="Set Floor Price"/>
                <input type="hidden" name="address" value={localStorage.address}/>
                {(localStorage.wallet) ? <button onClick={createNft} className="btn bg-primary text-white mt-3" name="create" type="button">Create NFT</button> : <button onClick={() => connect(this)} className="btn bg-primary text-white mt-3" name="create" type="button">Connect Wallet</button>}
                
            </form>
        </div>
        </div>
    )
}

export default Create