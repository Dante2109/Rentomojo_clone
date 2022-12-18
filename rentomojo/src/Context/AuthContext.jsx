import { createContext } from "react";
import {useState} from "react"
export const AuthContext=createContext();

function AuthContextProvider({children}){
    const[isAuth,setAuth]=useState(false);
    const [item,totalItem]=useState(0)
    const [price,totalPrice]=useState(0);
    
    return (<AuthContext.Provider value={{isAuth,setAuth}}>{children}</AuthContext.Provider>)
}
export default AuthContextProvider