import React from "react";

const Alert = ({type, message, style}) => {
    return(
        <div style={style} className={`alert alert-${type} px-3 py-2 align-items-center`} role="alert">
            <div>
            You do not have MetaMask installed. <a className="alert-link" target='_blank' href={`https://metamask.io/download.html`}>Install now</a> to continue.
            </div>
        </div>
    )
}
export const SuccessAlert = ({style, message, link, linkText}) => {
    return(
        <div style={style} class="alert alert-success" role="alert">
        {message} <a href={link} class="alert-link">{linkText}</a>
        </div>
    )
}

export const ErrorAlert = ({style, message, link, linkText}) => {
    return(
        <div style={style} class="alert alert-danger" role="alert">
        {message} <a href={link} class="alert-link">{linkText}</a>
        </div>
    )
}
export default Alert