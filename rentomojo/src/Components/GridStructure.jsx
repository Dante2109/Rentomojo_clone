import { Box ,CardBody,Card,Image,Text,Heading,Divider,Stack,Button,SimpleGrid,Tag,TagLabel,TagLeftIcon} from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import styled from "./Carousel2.module.css"
import { BsTruck } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export const GridStructure=({value,data,value2})=>{
    const [Data,setData]=useState(data)

    useEffect(()=>{
      if(value===""){
        setData(data)
      }else{
      setData(data.filter(el=>el.category===value))
      }
    },[value])
    return (
        <Box>
           <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {Data.map(el=><Cards image={el.image} key={Date.now()+el.id+Math.random()} days={el.days} title={el.title} price={el.price} link={el.id} value={value2}></Cards>)}
            </SimpleGrid>
        </Box>
    )
}
const Cards=({image,
    title,
    price,
    days,
    value,
    link  
    })=>{ 
      return <Card minW={"250px"} bg={"white"} rounded="3xl" className={styled.card2}>
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
        <NavLink to={`/${value}/${link}`}><Button bg={"red.500"} color="white" fontSize="sm" size={"sm"} _hover={{backgroundColor:"red.200"}}>View More</Button></NavLink>
      </Stack>
    </CardBody>
    </Card>
    }
// const Bedroom=data.filter(el=>el.category=)