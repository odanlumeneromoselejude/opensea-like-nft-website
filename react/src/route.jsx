import React from "react"
import {createBrowserRouter} from 'react-router-dom'
import Index from "./views/Index"
import Error404 from "./views/error404"
import Auth from "./components/Auth"
import Guest from "./components/Guest"
import Wallet from "./views/wallet"
import Collection from "./views/Collection"
import Nft from "./views/Nft"
import Create from "./views/Create"
import About from "./views/About"
import Terms from "./views/Terms"

const router = createBrowserRouter([
    {
        path:"/",
        element: <Index />
    },
    {
        path:"/collection/:name",
        element:<Collection />
    },
    {
        path:"/nft/:id",
        element:<Nft />
    },
    {
        path:"/nft/:id/:address",
        element:<Nft />
    },
    {
        path:"/nft/create",
        element: <Create/>
    },
    {
        path:"/about",
        element: <About />
    },
    {
        path: "termsofservice",
        element: <Terms />
    },
    {
        path:"my-wallet/:walletId",
        element: <Wallet/>
     },
    /**{
        path:"/",
        element: <Auth />,
        children:[
            {
                path:"wallet/:walletId",
                element: <Wallet/>
             }
        ]
    },
    {
        path:"/",
        element: <Guest />,
        children:[
            {

             }
        ]
    },**/
    {
        path:"*",
        element: <Error404 />
    }
])

export default router