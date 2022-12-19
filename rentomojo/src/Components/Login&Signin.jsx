
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons';
import { ViewOffIcon } from '@chakra-ui/icons';
import { useDisclosure,useToast} from '@chakra-ui/react';
import {useState } from "react"
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useEffect } from 'react';
import { json } from 'react-router-dom';


export const TransitionExample=({setName})=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let signupForm={
    firstname:"",
    email:"",
    password:""
  }
  let LSdata=JSON.parse(localStorage.getItem("users")) || []
  const [form,setForm]=useState(signupForm);
  const toast=useToast();
  const {isAuth,setAuth}=useContext(AuthContext)
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit=()=>{
      if(!LSdata.length){
        return (
          toast({
          title: 'Invalid email or id',
          description: "Access denied",
          status: 'error',
          duration: 1000,
          isClosable: true,
        }))
      }
      for(let j=0;j<LSdata.length;j++){
        if(LSdata[j].email==form.email && LSdata[j].password==form.password){
          console.log(LSdata[j].firstname)
          setName(LSdata[j].firstname);
          setAuth(true)
          onClose();
          return(
            toast({
              title: 'Signed in Successfully.',
              description: "Welcome",
              status: 'success',
              duration: 2000,
              isClosable: true,
            })
          )
        }
      }return (
        toast({
        title: 'Invalid email or id',
        description: "Access denied",
        status: 'error',
        duration: 1000,
        isClosable: true,
      }))
  }
  return (
    <>
      <Button onClick={onOpen} display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={400}
              color={'white'}
              bg={'red'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>Login/Signin</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        // motionPreset='slideInBottom'
        overflow="hidden"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
             <Flex
      minH={'30vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={2} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={form.email} name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"  name="password" value={form.password} onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'red'}
                color={'white'}
                _hover={{
                  bg: 'red.700',
                }}
                onClick={handleSubmit}
                >
                Sign in
              </Button>
              <BasicUsage onChal={onClose} setName={setName}/>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function BasicUsage({onChal,setName}){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const {isAuth,setAuth}=useContext(AuthContext)
  const toast=useToast()
  let LSdata=JSON.parse(localStorage.getItem("users")) || []
  let signupForm={
    firstname:"",
    email:"",
    password:""
  }
  const [form,setForm]=useState(signupForm);
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit=()=>{
      if(form.name==="" || form.email==="" || form.password===""){
        alert("Please fill all the mandatory details!")
      }else{
        setAuth(true);
        LSdata.push(form);
        setName(form.firstname)
        localStorage.setItem("users",JSON.stringify(LSdata))
        onClose();
        onChal();
        return(
          toast({
            title: "You're account has been created successfully",
            description: "Welcome",
            status: 'success',
            duration: 2400,
            isClosable: true,
          }))
        
      }
  }
  useEffect(()=>{
    console.log(isAuth)
  },[isAuth])

  return (
    <>
      <Button mt={"2px"}  bg={'red'}
                color={'white'}
                _hover={{
                  bg: 'red.700',
                }} onClick={()=>{onOpen()}} >Signup</Button>

      <Modal isOpen={isOpen} onClose={()=>{onClose();onChal()}} >
        <ModalOverlay />
        <ModalContent >  
          <ModalBody>
       <Flex
      minH={'30vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={2} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" name="firstname" onChange={handleChange} value={form.firstname}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={form.email} name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'red'}
                color={'white'}
                _hover={{
                  bg: 'red.700',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} onClick={onClose}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}