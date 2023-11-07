import React from "react";
const AppLogo = ({style, color}) => {
    return (
        <a className="navbar-brand me-auto me-sm-auto me-md-3 me-lg-5 me-xlg-5 d-flex ms-2 ms-sm-2 ms-md-0 ms-lg-0 ms-xlg-0 justify-content-center" href="/">
            <img src={`${import.meta.env.VITE_API_BASE_URL}/public/storage/uploads/icons/icon.png`} width="30" height="30" className="d-inline-block align-top" alt="brand-icon" />
            <span className={`fw-bolder my-auto ms-1 color-pink ${color}`}>EarthNFTs</span>
        </a>
    )
}
const AppURL = "earthnfts.net"
const AppAddress = "New York, NY 10012, US"
const AppEmail = ["info@"+AppURL, 'support@'+AppURL]

export default AppLogo
export {
    AppURL,
    AppAddress,
    AppEmail
} 