import {Routes,Route} from "react-router-dom";
import { Appliances } from "./Appliances";
import { Cart } from "./Cart";
import { Electronics } from "./Electronics";
import { Fitness } from "./Fitness";
import { Furniture } from "./Furniture";
import { Home } from "./Home";
import { Packages } from "./Packages";
import { Wfh } from "./WFH";
import { SingleProduct } from "./SingleProduct";
import { NotFound } from "./NotFoundPage";
import { PrivateRoute } from "./PrivateRoute";
export const Allroutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/appliances" element={<Appliances/>}/>
            <Route path="/electronics" element={<Electronics/>}/>
            <Route path="/fitness" element={<Fitness/>}/>
            <Route path="/furniture" element={<Furniture/>}/>
            <Route path="/packages" element={<Packages/>}/>
            <Route path="/wfh" element={<Wfh/>}/>
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
            <Route path="/:products/:id" element={<SingleProduct/>}/>
            <Route path= "*" element={<NotFound/>}  />
        </Routes>
    )
}