import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,Text, useDisclosure,
    Grid, GridItem 
  } from '@chakra-ui/react'
import Ahm from "../Photos/Indian_cities/Ahmedabad.png"
import Bangalore from "../Photos/Indian_cities/Banglore.png"
import Delhi from "../Photos/Indian_cities/Delhi.png"
import Chandigarh from "../Photos/Indian_cities/Chandigarh.png"
import Chennai from "../Photos/Indian_cities/Chennai.png"
import Faridabad from "../Photos/Indian_cities/Faridabad.png"
import GandhiNagar from "../Photos/Indian_cities/GandhiNagar.png"
import Kolkata from "../Photos/Indian_cities/Kolkata.png"
import Gurgaon from "../Photos/Indian_cities/Gurgaon.png"
import Hyderabad from "../Photos/Indian_cities/Hyderabad.png"
import Jaipur from "../Photos/Indian_cities/Jaipur.png"
import Mumbai from "../Photos/Indian_cities/Mumbai.png"
import Mysore from "../Photos/Indian_cities/Mysore.png"
import Noida from "../Photos/Indian_cities/Noida.png"
import Pune from "../Photos/Indian_cities/Pune.png"
import Ghaziabad from "../Photos/Indian_cities/Ghaziabad.png"
import { useState } from "react"

let data=[
  {city:"Bangalore",img:Bangalore},
  {city:"Mumbai",img:Mumbai},
  {city:"Pune",img:Pune},
  {city:"Delhi",img:Delhi},
  {city:"Noida",img:Noida},
  {city:"Gurgaon",img:Gurgaon},
  {city:"Hyderabad",img:Hyderabad},
  {city:"Chennai",img:Chennai},
  {city:"Ahmadabad",img:Ahm},
  {city:"Mysore",img:Mysore},
  {city:"Jaipur",img:Jaipur},
  {city:"Faridabad",img:Faridabad},
  {city:"Ghaziabad",img:Ghaziabad},
  {city:"Chandigarh",img:Chandigarh},
  {city:"Gandhi Nagar",img:GandhiNagar},
  {city:"Kolkata",img:Kolkata},
]

const Cities=({city,handlecity})=>{
  
    return (
<Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(8, 1fr)'
  color="red"
  m="40px"
  top="1"
>
{data.map(el=>
  <GridItem   _hover={{
    border:"1px solid red"
      }} onClick={()=>handlecity(el.city)}align="center" bg="white" color="black"  borderRadius="9px" border={city===el.city?"1px solid red":"none"} 
        p="10px" fontSize="12px">
    <img style={{border:"1px solid red", borderRadius:"35px"}} width="60px" src={el.img}alt="" />{el.city}
  </GridItem>
 )}
</Grid>
    )
}
export function Simple_Modal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [city,setCity]=useState("Delhi");
  const handlecity=(city)=>{
    setCity(city);
    onClose()
  }
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
    return (
      <>
        <Button height={"30px"}
        ml={"20px"} mt={"0px"}
          onClick={() => {
            onOpen()
          }}
        >
      {city}
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose} size="6xl" p="100px" >
        <OverlayOne/>
          <ModalContent>
            <ModalHeader>Choose Your City</ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
                <Cities city={city} handlecity={handlecity}/>
            </ModalBody>
            <ModalFooter>
              {/* <Button onClick={onClose}>Close</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }