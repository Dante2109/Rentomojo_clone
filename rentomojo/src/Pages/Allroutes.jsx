import {Routes,Route} from "react-router-dom";
import { Home } from "./Home";
export const Allroutes=()=>{
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}