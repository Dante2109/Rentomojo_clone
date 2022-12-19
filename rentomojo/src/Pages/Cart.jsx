import { Box, Heading,Image,Button,VStack, Card,StackDivider ,CardHeader, CardBody,Text,Center,Divider,Stack,CardFooter, useToast } from "@chakra-ui/react"
import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import Noitem from "../Photos/Icons/Noitem.png"
export const Cart=()=>{
    const {item,Price,details}= useContext(AuthContext)
    return (
        <Box textAlign={"center"}>
             {item?(<Box display={"flex"} justifyContent="space-evenly"><Summary Prrice={Price}/><Cartproducts details={details}/></Box>):<Box my={"90px"} ><Image margin={"auto"}  width={"40%"} src={Noitem}>
                </Image> <NavLink to="/furniture"><Button bg="red" size={"sm"} fontWeight="400" _hover={{bg:"red.300"}} color="white">Browse Catalogue</Button></NavLink></Box>}
        </Box>
    )
}
const Summary=({Prrice})=>{
    const toast=useToast();
    const {totalItem,item,totalPrice,Price,details,setDetails}=useContext(AuthContext);
    const navigate=useNavigate()
    return (<Card>
        <CardHeader>
          <Heading size='md'>Order Summary</Heading>
        </CardHeader>
      
        <CardBody>
          <Box display="flex" flexDirection="row" textAlign="left" gap="20px">
            <Box display="flex" flexDirection="column" w="300px" border="1px solid grey" borderRadius="10px" p="5">
              <Heading size='xs' textTransform='uppercase'>
                Payable Now
              </Heading>
              <Box display="flex" justifyContent="space-between">
              <Text pt='2' fontSize='sm'>
                Refudnable Deposit
              </Text>
               <Text pt='2' fontSize='sm'>
               ₹{(Prrice+0.23*Prrice).toFixed(2)}
              </Text>
              </Box>
               <Box display="flex" justifyContent="space-between">
              <Text pt='2' fontSize='sm'>
                Delivery Charges
              </Text>
               <Text pt='2' fontSize='sm'>
               ₹299
              </Text>
              
              </Box>
            </Box>
            <Center height='150px'>
              <Divider  orientation="vertical"/>
            </Center>
            <Box display="flex" flexDirection="column" w="300px" border="1px solid grey" borderRadius="10px" p="5">
              <Heading size='xs' textTransform='uppercase'>
                Monthly Payble Now
              </Heading>
              <Box display="flex" justifyContent="space-between">
              <Text pt='2' fontSize='sm'>
                Products Rent
              </Text>
               <Text pt='2' fontSize='sm'>
               ₹{Prrice}
              </Text>
              </Box>
               <Box display="flex" justifyContent="space-between">
              <Text pt='2' fontSize='sm'>
                GST
              </Text>
               <Text pt='2' fontSize='sm'>
               ₹120/mo
              </Text>
         
              </Box>
             <Center height='20px'>
              <Divider  orientation="horizontal"/>
            </Center>
             <Box display="flex" justifyContent="space-between">
              <Text pt='2' fontSize='sm'>
                Total Monthly Rent
              </Text>
               <Text pt='2' fontSize='sm'>
              ₹{Prrice+120}/mo
              </Text>
         
              </Box>
            </Box>
          </Box>
          <Button m="20px" bg="red" color={"white"} _hover={{bg:"red.400"}} onClick={()=>{totalItem(0);totalPrice(0);setDetails([]);return(
            toast({
            title: 'Order Placed Successfully',
            description: "Your order will be deliverd in a 3-4 working days",
            status: 'success',
            duration: 3000,
            position:"top",
            isClosable: true,
            onCloseComplete:()=>{navigate("/")}
        }))}} >One-Click Payment</Button>
        </CardBody>
  
      </Card>)
}

const Cartproducts=({details})=>{
    console.log("Cartproduct")
        return(
            <VStack divider={<StackDivider borderColor='gray.200' />}
    spacing={4} mt="20px">
    {details.map((el,i)=><Cartproduct index={i} title={el.title} rent={el.price} img={el.image}/>)}
                </VStack>
            
        )
}
const Cartproduct=({title,rent,img,index})=>{
    console.log("ikke")
    const {totalItem,item,totalPrice,Price,details,setDetails}=useContext(AuthContext);
    console.log(Price,item,details)
    return(
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  size="xs"
  p={2}
  maxW={"400px"}
  
>
  <Image
    objectFit="cover"
    boxSize="100px"
    src={img}
    alt='Caffe Latte'
    px={2}
  />

  <Stack>
    <CardBody >
      <Box display="flex" justifyContent="space-between" gap="40px" >
      <Heading size='sm' textAlign={"left"}>{title}</Heading>
      <Button color="red" onClick={()=>{setDetails(handleDetails(details,index));totalItem(prev=>prev-1);totalPrice(prev=>prev-rent);console.log(details);return Cart()}}>Delete</Button>
      </Box>
    </CardBody>

    <CardFooter display="flex" gap="30px">
      <Text textAlign={"left"} color="grey" fontSize={"10px"}>
        Rent
     <Text color="black" fontSize={"11px"}>
            ₹{rent}/mo
             </Text>
      </Text>
      <Text textAlign={"left"} color="grey" fontSize={"10px"}>
        Deposit
            <Text color="black" fontSize={"11px"} >
            ₹{rent+80}
             </Text>
      </Text>
    </CardFooter>
  </Stack>
</Card>
    )

}
const handleDetails=(data,i)=>{
    data.splice(i,1);
    return data
}