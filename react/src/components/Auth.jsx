import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contex/ContextProvider"

const Auth = () => {
    const {user, token} = useStateContext()
    if (!token){
        return <Navigate to="/"/>
    }
    return (
        <>
            <Outlet />
        </>
    )
}

export default Auth