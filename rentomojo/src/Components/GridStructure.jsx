import { Box ,CardBody,CardFooter,Card,Image,Text,Heading,Divider,Stack,Button,SimpleGrid,Tag,TagLabel,TagLeftIcon} from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import file from "../db.json"
import styled from "./Carousel2.module.css"
import Delivery from "../Photos/Icons/Delivery.png"
import { BsTruck } from "react-icons/bs";
let data=file.furniture
export const GridStructure=({value})=>{
    const [Data,setData]=useState(data)
    useEffect(()=>{
      if(value==""){
        setData(data)
      }else{
      setData(data.filter(el=>el.category==value))
      }
    },[value])
    return (
        <Box>
           <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {Data.map(el=><Cards image={el.image} key={Date.now()+el.id} days={el.days} title={el.title} price={el.price}></Cards>)}
            </SimpleGrid>
        </Box>
    )
}
const Cards=({image,
    title,
    price,
    days  
    })=>{ 
      return <Card minW={"300px"} bg={"white"} rounded="3xl" className={styled.card2}>
    <CardBody >
      <Image
        src={image}
        alt={title}
        borderRadius='lg'
        width={"100%"}
        margin="auto"
      />
      <Stack mt='6' spacing='3'>
        <Heading size='xs' textAlign={"left"}>{title}</Heading>
        <Divider/>
        <Box display="flex" justifyContent="space-between">
        <Box>
        <Text leftIcon color='black' fontWeight={600} fontSize='sm'>
          ₹{price}/mo
        </Text>
        </Box>
        <Tag size={"sm"} variant='subtle' colorScheme='cyan'>
        <TagLeftIcon boxSize='12px' as={BsTruck} />
        <TagLabel>{days}</TagLabel>
       </Tag>
        
        </Box>
        <Button bg={"red.500"} color="white" fontSize="sm" size={"sm"} _hover={{backgroundColor:"red.200"}}>View More</Button>
      </Stack>
    </CardBody>
    </Card>
    }
// const Bedroom=data.filter(el=>el.category=)