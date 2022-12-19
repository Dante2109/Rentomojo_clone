import { Box, Heading,Image,Button, Card, CardHeader, CardBody,Text,Center,Divider,Stack,CardFooter } from "@chakra-ui/react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import Noitem from "../Photos/Icons/Noitem.png"
export const Cart=()=>{
    const {item,Price,details}= useContext(AuthContext)
    console.log(Price,item,details)
    return (
        <Box textAlign={"center"}>
             {item?<Summary Price={Price}/>:<Box my={"90px"} ><Image margin={"auto"}  width={"40%"} src={Noitem}>
                </Image> <NavLink to="/furniture"><Button bg="red" size={"sm"} fontWeight="400" _hover={{bg:"red.300"}} color="white">Browse Catalogue</Button></NavLink></Box>}
        </Box>
    )
}
const Summary=({Price})=>{
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
               ₹{Price+0.23*Price}
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
               ₹{Price}
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
              ₹1209/mo
              </Text>
         
              </Box>
            </Box>
          </Box>
        </CardBody>
      </Card>)
}

const Cartproducts=({details})=>{
        return{
        }
}
const Cartproduct=({title,rent})=>{
    const {totalItem,item,totalPrice,Price,details,setDetails}=useContext(AuthContext);
    return(
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  size="xs"
  p={2}
  
>
  <Image
    objectFit="cover"
    boxSize="100px"
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
    px={2}
  />

  <Stack>
    <CardBody >
      <Box display="flex" justifyContent="space-between" gap="40px" >
      <Heading size='sm'>{title}</Heading>
      <Button color="red">Delete</Button>
      </Box>
    </CardBody>

    <CardFooter display="flex" gap="30px">
      <Text variant='solid' colorScheme='blue'>
        Rent
     <Text variant='solid' colorScheme='blue'>
            ₹{rent}/mo
             </Text>
      </Text>
      <Text variant='solid' colorScheme='blue'>
        Deposit
            <Text variant='solid' colorScheme='blue'>
            ₹{rent+80}
             </Text>
      </Text>
    </CardFooter>
  </Stack>
</Card>
    )

}