import ContentLoader from 'react-content-loader'
export const SmallLoader = () => {
    return(
        <>
        <ContentLoader className="mt-3" viewBox="0 0 380 35">
            <rect x="0" y="0" rx="15" ry="15" width="30" height="30" />
            <rect x="35" y="0" rx="4" ry="4" width="250" height="16" />
            <rect x="35" y="20" rx="3" ry="3" width="300" height="10" />
        </ContentLoader>
        <ContentLoader className="mt-3" viewBox="0 0 380 35">
            <rect x="0" y="0" rx="15" ry="15" width="30" height="30" />
            <rect x="35" y="0" rx="4" ry="4" width="250" height="16" />
            <rect x="35" y="20" rx="3" ry="3" width="300" height="10" />
        </ContentLoader>
        <ContentLoader className="mt-3" viewBox="0 0 380 35">
            <rect x="0" y="0" rx="15" ry="15" width="30" height="30" />
            <rect x="35" y="0" rx="4" ry="4" width="250" height="16" />
            <rect x="35" y="20" rx="3" ry="3" width="300" height="10" />
        </ContentLoader>
        <ContentLoader className="mt-3" viewBox="0 0 380 35">
            <rect x="0" y="0" rx="15" ry="15" width="30" height="30" />
            <rect x="35" y="0" rx="4" ry="4" width="250" height="16" />
            <rect x="35" y="20" rx="3" ry="3" width="300" height="10" />
        </ContentLoader>
        <ContentLoader className="mt-3" viewBox="0 0 380 35">
            <rect x="0" y="0" rx="15" ry="15" width="30" height="30" />
            <rect x="35" y="0" rx="4" ry="4" width="250" height="16" />
            <rect x="35" y="20" rx="3" ry="3" width="300" height="10" />
        </ContentLoader>
        <ContentLoader className="mt-3" viewBox="0 0 380 35">
            <rect x="0" y="0" rx="15" ry="15" width="30" height="30" />
            <rect x="35" y="0" rx="4" ry="4" width="250" height="16" />
            <rect x="35" y="20" rx="3" ry="3" width="300" height="10" />
        </ContentLoader>
        </>
    )
}

export const LargeLoader = () => {
    return(
        <>
        <ContentLoader className="" viewBox="0 0 380 400">
            <rect x="15" y="0" rx="5" ry="5" width="300" height="400" />
        </ContentLoader>
        </>
        )
}

export const MediumLoader = () => {
    return(
        <>
        <ContentLoader className="" viewBox="0 0 380 300">
            <rect x="15" y="0" rx="5" ry="5" width="300" height="300" />
        </ContentLoader>
        </>
        )
}
export const GifLoader = () => {
    return(
        <img className="m-auto d-flex" style={{ width:"70px", height:"70px" }} src={`${import.meta.env.VITE_API_BASE_URL}/public/storage/uploads/icons/loading.gif`}/>
    )
}