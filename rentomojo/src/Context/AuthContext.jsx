import { createContext } from "react";
import {useState} from "react"
export const AuthContext=createContext();

function AuthContextProvider({children}){
    const[isAuth,setAuth]=useState(false);
    const [item,totalItem]=useState(0)
    const [Price,totalPrice]=useState(0);
    const [details,setDetails]=useState([])
    return (<AuthContext.Provider value={{details,setDetails,isAuth,setAuth,item,totalItem,Price,totalPrice}}>{children}</AuthContext.Provider>)
}
export default AuthContextProvider