export const SingleProduct=()=>{

}
// function BasicUsage() {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//      const [showPassword, setShowPassword] = useState(false);
//     return (
//       <>
//         <Button onClick={onOpen}>Open Modal</Button>
  
//         <Modal isOpen={isOpen} onClose={onClose}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Modal Title</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//                   <Flex
//         minH={'100vh'}
//         align={'center'}
//         justify={'center'}
//         bg={useColorModeValue('gray.50', 'gray.800')}>
//         <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//           <Stack align={'center'}>
//             <Heading fontSize={'4xl'} textAlign={'center'}>
//               Sign up
//             </Heading>
//             <Text fontSize={'lg'} color={'gray.600'}>
//               to enjoy all of our cool features ✌️
//             </Text>
//           </Stack>
//           <Box
//             rounded={'lg'}
//             bg={useColorModeValue('white', 'gray.700')}
//             boxShadow={'lg'}
//             p={8}>
//             <Stack spacing={4}>
//               <HStack>
//                 <Box>
//                   <FormControl id="firstName" isRequired>
//                     <FormLabel>First Name</FormLabel>
//                     <Input type="text" />
//                   </FormControl>
//                 </Box>
//                 <Box>
//                   <FormControl id="lastName">
//                     <FormLabel>Last Name</FormLabel>
//                     <Input type="text" />
//                   </FormControl>
//                 </Box>
//               </HStack>
//               <FormControl id="email" isRequired>
//                 <FormLabel>Email address</FormLabel>
//                 <Input type="email" />
//               </FormControl>
//               <FormControl id="password" isRequired>
//                 <FormLabel>Password</FormLabel>
//                 <InputGroup>
//                   <Input type={showPassword ? 'text' : 'password'} />
//                   <InputRightElement h={'full'}>
//                     <Button
//                       variant={'ghost'}
//                       onClick={() =>
//                         setShowPassword((showPassword) => !showPassword)
//                       }>
//                       {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
//               </FormControl>
//               <Stack spacing={10} pt={2}>
//                 <Button
//                   loadingText="Submitting"
//                   size="lg"
//                   bg={'blue.400'}
//                   color={'white'}
//                   _hover={{
//                     bg: 'blue.500',
//                   }}>
//                   Sign up
//                 </Button>
//               </Stack>
//               <Stack pt={6}>
//                 <Text align={'center'}>
//                   Already a user? <Link color={'blue.400'}>Login</Link>
//                 </Text>
//               </Stack>
//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>
//             </ModalBody>
  
//             <ModalFooter>
//               <Button colorScheme='blue' mr={3} onClick={onClose}>
//                 Close
//               </Button>
//               <Button variant='ghost'>Login</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </>
//     )
//   }