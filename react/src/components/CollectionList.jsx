import React from "react";

const CollectionItems = ({value, count}) => {
    return(
        <a href={`/collection/${value['name']}`} className="col-12 col-md-6 text-dark">
            <div className="d-flex p-3">
                <div className="my-auto me-3">{count}</div>
                <img className="img rounded-circle me-2 my-auto border" alt="" src={`${import.meta.env.VITE_API_BASE_URL}/public/${value['image']}`} width="30" height="30"/>
                <div className="">
                    <div className="text-capitalize fs-6">{value['name']} {(value['verified'] == true) ? <i className="bi bi-patch-check-fill my-auto text-primary"></i> : null}</div>
                    <div style={{ 'fontSize':'12px' }} className="text-muted fw-normal">Floor: <span className="fw-bold">{value['floor']} ETH</span></div>
                </div>
                <div className="my-auto ms-auto fs-6">{value['volume']/1000}K</div>                             
            </div>
        </a>
    )
}

export const CollectionHeader = ({type, title, icon, color}) => {
    return(
        <>
        <div className="d-flex">
            <h3 className={`my-auto fw-bold ${color}`} id="top-collection">{icon}{type}</h3>
            <form className="ms-auto d-block d-sm-flex">
                {(title != "none") ? (
                <div className="me-0 me-sm-2">
                    <select defaultValue="24" role="button" className="form-select shadow-none my-auto">
                        <option value="1">1h</option>
                        <option value="12">12h</option>
                        <option value="24">1d</option>
                    </select>
                </div>
                ) : null}
                <a href="#"><button type="button" className="btn shadow-lg fw-bold text-light btn-dark mt-2 mt-sm-0">{(title != "none") ? "Show More" : "Explore"}</button></a>
            </form>
        </div>
        {(title != "none") ? (
            <div className="row mt-4">
            <div className="col-12 col-md-6 text-muted">
                <div className="d-flex px-3">
                    <div className="me-3">
                        #
                    </div>
                    <div>
                        collection
                    </div>
                    <div className="ms-auto">
                        volume
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block text-muted">
                <div className="d-flex px-3">
                    <div className="me-3">
                        #
                    </div>
                    <div>
                        collection
                    </div>
                    <div className="ms-auto">
                        volume
                    </div>
                </div>
            </div>
        </div>
        ) : null}
        </>
    )
}

export const CollectionBoxItems = ({value, type, count}) => {
    return (
        <>
        <a href={(type != "live" && type != "category") ? (`/nft/${value['id']}${(localStorage.wallet)? "/"+localStorage.address : ""}`)
            : (`/collection/${value['name']}`)} className="text-dark">
            <div className="card mx-2 box-items" style={{ "minWidth":"250px" }}>
                <img className="card-img-top" style={{ "height":"250px" }} src={`${import.meta.env.VITE_API_BASE_URL}/public/${value['image']}`} alt=""/>
                {
                    (type == "live" || type == "category") ? (
                        <div className="card-body">
                            <div className="text-capitalize fs-6 fw-bold my-auto">{value['name']} {(value['verified'] == true) ? <i className="bi bi-patch-check-fill my-auto text-primary my-auto"></i> : null}</div>
                        </div>
                    ) : null
                }
                {(type != "category") ? (
                <div className="card-footer">
                    <div className="row">
                        <div className={`${(type == 'live') ? "col-5": "col-6"} me-auto`} style={{ "fontSize":"14px" }}>
                            <div className="col-12 fw-normal">
                                Floor
                            </div>
                            <div className="col-12 fw-bold">
                                {value['floor']} ETH
                            </div>
                        </div>
                        {(type == "live") ? (
                            <div className="col-4" style={{ "fontSize":"14px" }}>
                                <div className="col-12 fw-normal">
                                    Bids
                                </div>
                                <div className="col-12 fw-bold">
                                    {value['bids']}
                                </div>
                            </div>
                        ) : null}
                        <div className={`${(type == 'live') ? "col-3": "col-6"} ms-auto`} style={{ "fontSize":"14px" }}>
                            <div className="col-12 fw-normal">
                                {(type == "live") ? "Ends" : "Volume"}
                            </div>
                            <div className="col-12 fw-bold">
                                {(type == "live") ? value['auction_end_date'] : (`${value['volume']/1000}K`)}
                            </div>
                        </div>
                    </div>
                </div>
                ) : null}
            </div>
        </a>
        </>
    )
}

export default CollectionItems