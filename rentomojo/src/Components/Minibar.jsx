import { NavLink } from "react-router-dom"
import { Box } from "@chakra-ui/react"
export const Minibar=()=>{
    return(
        <Box display={"flex"} gap="10px">
            <NavLink style={({ isActive }) =>isActive? { color: 'green',fontSize:"12px" }: { color:"black",fontSize:"11px" }} to="/furniture">Furnitures</NavLink>
            <NavLink style={({ isActive }) =>isActive? { color: 'green',fontSize:"12px" }: { color:"black",fontSize:"11px" }} to="/appliances">Appliances</NavLink>
            <NavLink style={({ isActive }) =>isActive? { color: 'green',fontSize:"12px" }: { color:"black",fontSize:"11px" }} to="/electronics">Electronics</NavLink>
            <NavLink style={({ isActive }) =>isActive? { color: 'green',fontSize:"12px" }: { color:"black",fontSize:"11px" }} to="/Fitness">Fitness</NavLink>
        </Box>
    )
}