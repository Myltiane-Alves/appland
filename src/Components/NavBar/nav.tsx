import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  StackDivider,
  StackProps,
  Text,
  useBreakpointValue,
  useDisclosure,
  VisuallyHidden,
} from "@chakra-ui/react";
import { IoIosClose } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
type NavItemProps = {
  children: React.ReactNode;
  href: string;
  large?: boolean;
}

function NavItem(props: NavItemProps) {
  const { children,  href, large } = props;
  return (
    <Link to={href}>
      <HStack
        as="a"
        spacing="2"
        paddingX="3"
        paddingY={large ? '5' : '2.5'}
        rounded="lg"
        color= "#00DFF0"
        _hover={{ color: 'brown.600' }}
        _activeLink={{ color: '#00DFF0' }}
      >
      
        <Text fontFamily="heading">{children}</Text>
      </HStack>
    </Link>
  );
}

const items= [
  {label: 'Início', href: '/', color: "#00DFF0"},
  {label: 'Planos', href: '/plans', color: "#00DFF0"},
]

function DesktopNavItem(props: StackProps) {

  return (
    <HStack
      as="nav"
      aria-label="Main Navigation"
      spacing="8"
      {...props}
      // bg="red"
    >
      {items.map((item) => (
        <NavItem key={item.href} href={item.href} >
          {item.label}
        </NavItem>
       ))}
        <Button
          w="160px"
          h="50px"
          border="none"
          bg="#00DFF0"
          _hover={{ bg: '#00dff0d4', color: '#fff' }}
          color="#282828"
        >
          Fazer login
        </Button>
    </HStack>
  )
}

function MobileNavItemGroup(props: StackProps) {
  return (
    <Stack
      divider={<StackDivider borderColor="whiteAlpha.300" />}
      as="nav"
      aria-label="Main navigation"
      spacing="0"
      alignSelf="center"
      // bg="#fff"
      {...props}
    >
      {items.map((item) => (
        <NavItem key={item.label} href={item.href}  large >
          {item.label}
        </NavItem>
      ))}
      <Button
          w={{ base: '150px', md: '160px' }}
          h={{ base: '70px', md: '50px' }}
          border="1px solid #00DFF0"
          _hover={{ bg: '#00DFF0', color: '#fff', border: '#00DFF0' }}
          fontSize="20px"
        >
        Fazer login
      </Button>
    </Stack>
  );
}

function Headshot() {
  return (
    <Box
      display="flex"
      alignItems="center"
    >
        <VisuallyHidden>Home</VisuallyHidden>
        <Text
          as="span"
          fontSize="32px"
          fontWeight="bold"
          color="#00DFF0"

        > 
          BatePonto
        </Text>
        <Image
          
          alt="Logo"
          src={logo}    
          width="25%"
          objectFit="cover"
        />
    
    </Box>
  );
}

function MobileNavMenu() {
  const menu = useDisclosure();

  const breakpoint = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (menu.isOpen && !breakpoint) {
      menu.onClose();
    }
  }, [breakpoint, menu]);

  return (
    <>
      <Center
        color="white"
        width="60px"
        height="45px"
        display={{ base: 'flex', md: 'none' }}
        as="button"
        aria-haspopup="true"
        aria-expanded={menu.isOpen}
        aria-controls="nav-menu"
        id="nav-menu--trigger"
        type="button"
        onClick={menu.onOpen}
        bg="#00DFF0"
      >
        {menu.isOpen ? <IoIosClose size={30}/> : <AiOutlineMenu size={30}/>}
      </Center>
      <Drawer isOpen={menu.isOpen} onClose={menu.onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent id="nav-menu" bg="#fff" padding="6" color="#00DFF0" fontSize="24px" _active={{color: '#00DFF0'}}>
          <MobileNavItemGroup />
        </DrawerContent>
      </Drawer>
    </>
  );
}


const NavBar = () => {
  
  return (
    <Box   
      as="header"
      paddingY="4"
      maxWidth="6x1"
      marginX="auto" 
      paddingX="6"
    >
      <Flex
        justify="space-between"
        align="center"
      >
        <Link 
          to="/"
        >
          <Headshot />
        </Link>
        <DesktopNavItem display={{ base: 'none', md: 'flex' }} />
        <MobileNavMenu />
      </Flex>
    
    </Box>
  );
};

export default NavBar;
