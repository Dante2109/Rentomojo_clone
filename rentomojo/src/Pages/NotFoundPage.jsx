import { Box ,Image,Button} from "@chakra-ui/react"
import notfound from "../Photos/Icons/notfound404.png"
import { NavLink } from "react-router-dom"
export const NotFound=()=>{
    console.log("heiahihfra")
    return (
        <Box  my={"90px"} textAlign={"center"} >
            <Image src={notfound} margin={"auto"} width={"30%"}></Image>
            <NavLink to="/"><Button bg="red" size={["xs","sm","md",'lg']} fontWeight="400" _hover={{bg:"red.300"}} color="white">Go to Homepage</Button></NavLink>
        </Box>
    )
}