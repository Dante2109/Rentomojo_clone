import { 
  Grid,
  Box,
  Text
  ,Image,
 } from "@chakra-ui/react"
import ImageSlider from "../Components/Caraousel"
import Package from "../Photos/Icons/Package.png"
import Bed from "../Photos/Icons/Bed.png"
import WashingMachine from "../Photos/Icons/WashingMachine.png"
import Electronics from "../Photos/Icons/Electronics.png"
import Gym from "../Photos/Icons/Gym.png"
import Wfh from "../Photos/Icons/Wfh.png"
import { NavLink } from "react-router-dom"
import SimpleThreeColumns from "../Components/HomepageFeatures"
import { FurnitureSlider } from "../Components/Carousel2"
import {FurnitureSlider2} from "../Components/Carousel3"
const Products=[
  {
    href:"/packages",
    src:Package,
    text:"Packages"
  },
  {
    href:"/furniture",
    src:Bed,
    text:"Furniture"
  },
  {
    href:"/appliances",
    src:WashingMachine,
    text:"Appliances"
  },
  {
    href:"/electronics",
    src:Electronics,
    text:"Electronics"
  },
  {
    href:"/fitness",
    src:Gym,
    text:"Fitness"
  },
  {
    href:"/wfh",
    src:Wfh,
    text:"WFH Essentials"
  },
  
]
const Boxes=()=>{
  return (
    <Grid templateColumns={{base:'repeat(2,1fr)',sm:'repeat(4,1fr)',xl:'repeat(6,1fr)'}} justifyItems="flex-start" gap="20px" width="80%" m="auto" p="50px">
      {Products.map(el=>
        <NavLink  to={el.href}><Box py="10px" px={{base:"20px", md:"40px",xl:"50px"}} border={"1px solid #ebf0f4 "} transition="ease-in-out" transitionDuration={"400ms"} rounded={"md"} _hover={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"}}>
        <Image boxSize={"50px"} m="auto" src={el.src} ></Image>
         <Text  textDecoration="none" fontSize="xs">{el.text}</Text>
     </Box></NavLink>)}
    </Grid>
  )
}
export const Home=()=>{
    return (
        <div> 
            <ImageSlider></ImageSlider>
            <Boxes></Boxes>
            <FurnitureSlider></FurnitureSlider>
            <SimpleThreeColumns ></SimpleThreeColumns>
            <FurnitureSlider2></FurnitureSlider2>
        </div>
    )
}