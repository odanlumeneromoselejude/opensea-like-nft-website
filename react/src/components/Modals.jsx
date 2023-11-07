import React, { useEffect, useState } from "react"
import Alert from "./Alerts"

export const Toast = ({title, message}) => {
    return(
        <div className="position-fixed top-1 end-0 p-3" style={{"zIndex":"99"}}>
            <div id="liveToast" className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto">{title}</strong>
                    <small>11 mins ago</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    {message}
                </div>
            </div>
        </div>
    )
}

const WalletDialog = ({title}) => {
    const [modalRemoved, setModalRemoved] = useState(true)
    let style
    const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))

    

    const signUp = () => {

    }

    const connectMetaMask = async () => {
        try{
            if (!isMobile){
                if (window.ethereum){
                    
                }
            }else{
                window.open("")
            }
        }catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        if (!isMobile){
            if (window.ethereum){
                setModalRemoved(true)
            }else{
                setModalRemoved(false)
                style = {'display':'flex'}
            }
        }else{
            style = {'display':'none'}
            setModalRemoved(false)
        }
    }, [modalRemoved])
    return (
        <>
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
            <div className="modal-dialog modal-ms modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalToggleLabel">{title}</h5>
                    <button type="button" className="btn-close outline-none shadow-none border-0" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                {(!window.ethereum && !isMobile) ? (<Alert style={style} type="warning" message="You do not have MetaMask installed. ${<a target='_blank' href={`https://metamask.io/download.html`}>Install now</a>} to continue" />) : null}
                    <button onClick={connectMetaMask} className="btn btn-light w-100 fw-bold text-dark border px-3 py-2 shadow-sm" type="button" data-bs-toggle={`${(modalRemoved == true) ? "modal" : ""}`} href="#exampleModalToggle" role="button"><img className="float-start" src="assets/metamask.svg" width="30" height="30"/> <span className="m-2">MetaMask</span> <div className="badge float-end badge rounded-pill bg-primary">POPULAR</div></button>
                </div>
                <div className="modal-body">
                    If you do not already have a wallet, create one.
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
export const Dialog = ({title, body}) => {
    return (
        <>
        <div className="modal fade " id="custom-dialog" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
            <div className="modal-dialog modal-ms modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="custom-dialog">{title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {body}
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export const ClaimDialog = () => {
    const [style, setStyle] = useState({})
    useEffect(() => {
        setTimeout(() => {
            setStyle({display:'block'})
        }, 5000)
    }, [])
    const clicked = () => {
        setStyle({display:'none'})
    }
    
    return(
        <>
        <div onClick={() => clicked()} style={style} className="modal fade show bg-dark bg-opacity-50" id="claim-dialog" aria-modal="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" role="modal">
            <div className="modal-dialog modal-ms modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="claim-dialog">Sign Up Reward</h5>
                    <button onClick={() => clicked()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Sign up and get up to 1 ETH in rewards.
                    <br></br><button onClick={() => {connect(this)}} className="mt-3 text-white bg-primary py-2 px-4">Sign Up Now</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default WalletDialog