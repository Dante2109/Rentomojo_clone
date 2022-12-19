import Logo from "../Photos/Daco_6048519.png"
import {Simple_Modal} from "./Modal"
import React, { useContext,useState } from "react";
import {
    Box,
    Flex,
    Input,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    TagLeftIcon,
    Link,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,Menu,MenuButton,MenuList,TagLabel, useToast
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { NavLink } from "react-router-dom";
  import { AiOutlineShoppingCart } from "react-icons/ai";
  import { TransitionExample } from "./Login&Signin";
  import { AuthContext } from "../Context/AuthContext";
  import { BiLogOut} from "react-icons/bi";
  

  export default function Navbar() {
    const {isAuth,setAuth}=useContext(AuthContext)
    const { isOpen, onToggle } = useDisclosure();
    const [name,setName]=useState("")
  
    return (
      <Box position="sticky" top="0" zIndex={1}>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={[4,8,30,35,40]}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          
            >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                <NavLink to="/"><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KdSf8-GojXhMVWiyraRD2RozGH1QAmMYmA&usqp=CAU" height={{base:"20px",md:"30px",xl:"30px"}} alt='Dan Abramov' /></NavLink>
                <div class="rento-sprite rento-sprite-logo"></div>
                <Box display={{base:"none",md:"inline-flex"}}><Simple_Modal /></Box>
          </Flex>
            <Input display={{base:"none",md:"inline-flex"}} placeholder="Search" width={[80,100,200,250,300]} mr="10px" />
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
           <NavLink to="/cart">
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              mt="10px"
            >
             <TagLeftIcon as={AiOutlineShoppingCart} w={8}/>Cart 
            </Button>
            </NavLink>
              {isAuth?<Profile Name={name} setAuth={setAuth}/>:<TransitionExample setName={setName} />}
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS= [
    {
      label: <Input placeholder="Search"/>
    },
    {
      label: 'Find Work',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'Learn Design',
      href: '#',
    },
    {
      label: 'Hire Designers',
      href: '#',
    },
  ];

  const Profile=({Name,setAuth})=>{
    const toast=useToast()
   return <Menu>
  <MenuButton as={Button} >
    {Name}
  </MenuButton>
  
  <MenuList cursor={"pointer"} onClick={()=>{setAuth(false);return(toast({
          title: 'Warning!',
          description: "You have been logged out",
          status: 'warning',
          duration: 2000,
          isClosable: true,
        }))}}>
    Logout
  </MenuList>
</Menu>
  }