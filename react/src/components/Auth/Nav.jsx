import React, { useEffect, useRef, useState } from "react"
import AppLogo from '../../components/AppInfo'
import WalletDialog from'../../components/Modals'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosClient from "../../axios-client";
export const Search = () => {
    const [search, setSearch] = useState("")
    const [collections, setCollections] = useState([]);
    const [creators, setCreators] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [show, setShow] = useState(false)
    const abortController = new AbortController()

    const performSearch = (event, type) => {
        setLoaded(false)
        const value = (event.target.value).toLowerCase();
        setSearch(value);
        if (value != ""){
            setShow(true)
            //abortController.abort()
            axiosClient.get(`/search?query=${value}&type=${type}`, {
                signal: abortController.signal
            })
            .then(({data}) => {
                setCollections(data)
                setLoaded(true)
            })
            .catch(err => {
                const response = err.response
                if (response && response.status == 422){
                    console.log(response.data.errors)
                }
            })
        }else{
            setShow(false)
        }
    }
    const [changed, setChanged] = useState("Collections");
    const specificSearch = (event) => {
        setLoaded(false)
        const value = search
        const type = event.target.value;
        setChanged(type)
        if (value != ""){
            setShow(true)
            axiosClient.get(`/search?query=${value}&type=${type}`)
            .then(({data}) => {
                setCollections(data)
                setLoaded(true)
            })
            .catch(err => {
                const response = err.response
                if (response && response.status == 422){
                    console.log(response.data.errors)
                }
            })
        }else{
            setShow(false)
        }
    }
    return(
        <>
        <div className="d-flex input-group mb-1 ms-md-3 ms-lg-4 ms-xlg-4 position-relative border rounded-2 bg-white" style={{ color:"#444444", fontWeight:"normal" }}>
            <span className="input-group-text bg-transparent border-0"><i className="bi bi-search"></i></span>
            <input id="search-inp" onFocus={(event) => performSearch(event, "Collections")} onChange={(event) => performSearch(event, "Collections")} style={{ fontSize:18 }} className="form-control p-2 outline-none shadow-none border-0" type="search" placeholder="Search by creator, artwork or collection" aria-label="Search" />
            {/**<button type="button" role="button" className={`btn bg-dark rounded my-auto me-2 inner-btn ${(close == false) ? 'd-none' : 'd-block'}`}><i className="bi bi-x-lg close"></i></button>**/}
            <div className={`bg-white mx-auto p-3 position-absolute mt-5 w-100 d-${(show) ? "block" : "none"}`} style={{ zIndex:"9999999", top:"-5px", borderBottomLeftRadius:"5px", borderBottomRightRadius:"5px", borderBottom:"1px solid lightgrey", borderLeft:"1px solid lightgrey", borderRight:"1px solid lightgrey" }}>
                { (loaded) ?
                <div className="mb-2 d-flex">
                    <div className="my-auto">Search By:</div>
                    <select onChange={(event) => specificSearch(event)} role="button" className="rounded ms-2 my-auto p-1" style={{ border: "1px solid lightgrey" }}>
                    {(changed == "Collections") ? 
                    (
                        <>
                            <option selected>Collections</option>
                            <option>Creators</option>
                        </>
                    ) : (
                        <>
                            <option>Collections</option>
                            <option selected>Creators</option>
                        </>
                    )}
                        
                    </select>
                </div>
                : null
                }
                <div>{(loaded) ? collections.length+" Result(s) Found" : "Searching... Please wait" }</div>
                {(loaded) ?
                <div className="mt-2">
                    <div><b>{changed}</b></div>
                    {(collections.length == 0) ? 
                        <div>No {changed} found!</div> :
                        collections.map(value => 
                            <a href={(changed == "Collections") ? `/collection/${value['name']}` : `/creators/${value['id']}`}><div>{value['name']}</div></a>
                            )
                    }
                </div>
                : null
                }
            </div>
        </div>
        </>
    )
}

const PseudoNavMenu = ({menuClicked, device}) => {
    let classes = "";
    (device == "small") ? classes = "collapse navbar-sm-collapse bg-secondary rounded d-md-none position-absolute p-3 top-0 mt-5 start-5 z-index-99" : classes="collapse navbar-collapse d-none d-md-block"
    return(
        <div className={`${classes}`} id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item d-block d-sm-block d-md-none d-lg-block">
                    <a className="nav-link active" aria-current="page" href={`/my-wallet/${localStorage.address}`}><span style={{ fontSize:18 }}>Wallet</span></a>
                </li>
                <li className="nav-item dropdown ms-md-2 ms-lg-3 ms-xlg-3">
                    <a className="nav-link dropdown-toggle active" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span style={{ fontSize:18 }}>Categories</span>
                    </a>
                    <ul className={`dropdown-menu ${(menuClicked === true) ? 'show' : ''}`} aria-labelledby="navbarScrollingDropdown" id="show-dd">
                        <li><a className="dropdown-item" href="/#top-collection"><i className="bi bi-1-square-fill me-2"></i>Top</a></li>
                        <li><a className="dropdown-item" href="/#trending-collection"><i className="bi bi-hash me-1"></i> Trending</a></li>
                        <li><a className="dropdown-item" href="/#live-bidding"><i className="bi bi-stop-circle me-2"></i>Live Bidding</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-shop-window me-2"></i>Marketplace</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-video me-2"></i>Creators</a></li>
                        <li><a className="dropdown-item" href="/nft/create"><i className="bi bi-folder-plus me-2"></i>Create NFT</a></li>
                    </ul>
                </li>
            </ul>
            <Search />
        </div>
    )
}

export const NavMenu = ({menuClicked}) => {
    return(
        <>
        <PseudoNavMenu menuClicked={menuClicked} device="small"/>
        <PseudoNavMenu menuClicked={menuClicked} device="large"/>
        </>
    )
}

const PseudoNav = ({type}) => {
    const [offset, setOffset] = useState(0);
    const [userAddress, setUserAddress] = useState("");
    let switchNavTheme = {};
    const [walletAddr, setWalletAddr] = useState(localStorage.wallet)

    useEffect(() => {
        function checkUserData() {
          const item = localStorage.getItem('wallet')
          if (item) {
            setWalletAddr(true)
          }else{
            setWalletAddr(false)
          }
        }
        window.addEventListener('storage', checkUserData)
    
      }, [walletAddr])

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    if (offset > 300) {
        switchNavTheme['text'] = "navbar-light text-dark"
        switchNavTheme['shadow'] = "shadow-sm"
        switchNavTheme['bg'] = {"backgroundColor":"#ffffff"}
    } else {
        switchNavTheme['text'] = "navbar-dark text-light"
        switchNavTheme['shadow'] = "shadow-none"
        switchNavTheme['bg'] = {"backgroundColor":"#909090"}
    }

    const [menuClicked, setMenuClicked] = useState(false);
    const expandDropdown = () => {
        (menuClicked === false) ? setMenuClicked(true) : setMenuClicked(false)
    }
    return(
        <>
        <nav style={switchNavTheme['bg']} className={`navbar navbar-expand-md ${switchNavTheme['text']} fixed-top fw-bold ${switchNavTheme['shadow']} ${type}`}>
            <div className="container-fluid mx-lg-4">
                <button onClick={() => expandDropdown()} className="btn btn-lg navbar-toggler p-1 border-0 outline-none shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <i className={`bi bi-list ${switchNavTheme['text']} fs-1`}></i>
                </button>
                <AppLogo color={switchNavTheme['text']}/>
                <NavMenu menuClicked={menuClicked}/>
                
                    <button className="btn btn-warning outline-none shadow-none border-0 p-0 ms-0 ms-sm-2 ms-md-3 ms-lg-4 ms-xlg-4 my-auto connect-wall" role="button">
                        <div className="input-group">
                            <span className="input-group-text bg-warning text-white border-0 fw-bold"><FontAwesomeIcon icon="fa-solid fa-wallet" /></span>
                            <span className="my-auto text-ver-div border-0">|</span>
                            <span className="input-group-text bg-warning text-white border-0 fw-bold">My Wallet</span>
                        </div>
                    </button>
                
                    <button className={`${(walletAddr) ? 'hidden' : ''} unconnected btn outline-none shadow-none border-0 p-0 ms-0 ms-sm-2 ms-md-3 ms-lg-4 ms-xlg-4 my-auto connect-wall`} onClick={() => connect(this)} role="button">
                        <div className="input-group">
                            <span className="unconnected-text input-group-text fw-bold bg-warning text-light border-0">Connect <span className="d-none d-sm-block ms-1"> Wallet</span></span>
                            <span className="input-group-text bg-warning text-white border-0"><i className="bi bi-wallet2"></i></span>
                        </div>
                    </button>
                
            </div>
        </nav>
        <WalletDialog title="Connect Wallet" />
        </>
    )
}

const Nav = () => {
    return(
        <>
        <PseudoNav type="position-relative invisible" />
        <PseudoNav />
        <div className="p-3 m-0">
            <div className="d-md-none">
                <Search />
            </div>
        </div>
        </>
    )
}
export default Nav