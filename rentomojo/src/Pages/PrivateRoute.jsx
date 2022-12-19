import { useToast } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

export const PrivateRoute=({children})=>{
    const {isAuth}=useContext(AuthContext)
    const toast=useToast()
    if(!isAuth){
        toast({
            title: 'Access Denied!',
            description: "Login is required",
            status: 'warning',
            duration: 2000,
            position:"bottom",
            isClosable: true,
            })
        return(<Navigate to="/"></Navigate>)
    }
    return children
}