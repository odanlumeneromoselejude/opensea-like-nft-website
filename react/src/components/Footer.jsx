import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppLogo, {AppURL, AppAddress, AppEmail} from "./AppInfo";
import { Dialog } from "./Modals";

const Footer = () => {
    return(
        <>
        <footer className="text-center text-lg-start bg-light text-muted container-fluid mt-5">
            <section className="container-fluid d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={["fab", "fa-facebook-f"]} color="blue" size="lg" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={["fab", "fa-twitter"]} color="skyblue" size="lg"/>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={["fab", "fa-google"]} size="lg" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={["fab", "fa-instagram"]} color="pink" size="lg" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={["fab", "fa-linkedin"]} color="blue" size="lg" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FontAwesomeIcon icon={["fab", "fa-github"]} size="lg" />
                    </a>
                </div>
            </section>
            <section className="container-fluid">
                <div className="container-fluid text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <AppLogo color="text-dark" style={{ 'marginLeft':'auto !important' }}/>
                            </h6>
                            <p>
                                World's first private NFT marketplace. Showcase your creative ideas
                                to our massive pool of serious and interested buyers
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Categories
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Marketplace</a>
                            </p>
                            {/* {<p>
                                <a href={`/my-wallet/${localStorage.address}`} className="text-reset">Wallet</a>
                            </p>} */}
                            <p>
                                <a href="/#live-bidding" className="text-reset">Live Bidding</a>
                            </p>
                            <p>
                                <a href="/nft/create" className="text-reset">Create NFT</a>
                            </p>
                            <p>
                                <a href="/#top-collection" className="text-reset">Collections</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="/about" className="text-reset">About</a>
                            </p>
                            
                            <p>
                                <a href="/termsofservice" className="text-reset">Terms of Service</a>
                            </p>
                            <p>
                                <a className="text-reset position-relative" data-bs-toggle="modal" href="#custom-dialog" role="button">Jobs <span className="badge rounded-pill bg-primary">We're hiring</span></a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            {/*<p><FontAwesomeIcon icon={["fas", "fa-home"]} className="me-3" />{AppAddress}</p>*/}
                            {AppEmail.map((value) => <div className="mt-2"><a href={`mailto:${value}`} key={value}><FontAwesomeIcon icon={["fas", "fa-envelope"]} className="me-3" />{value}</a></div>)}
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4" style={{"backgroundColor": "rgba(0, 0, 0, 0.05)"}}>
                © {new Date().getFullYear()} Copyright
                <a className="text-reset fw-bold ms-2" href="/">{AppURL}</a>
            </div>
        </footer>
        <Dialog title="We're Hiring!" body={`All job applications/inquires should me sent directly to our mail: hiring@${AppURL}`}/>
        </>
    )
}

export default Footer