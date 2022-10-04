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
        color= "#FFF"
        _hover={{ color: 'brown.600' }}
        _activeLink={{ bg: 'gray.800', shadow: 'highlight' }}
      >
      
        <Text fontFamily="heading">{children}</Text>
      </HStack>
    </Link>
  );
}

const items= [
  {label: 'Início', href: '/', color: "#FFF"},
  {label: 'Planos', href: '/plans', color: "#FFF"},
]

function DesktopNavItem(props: StackProps) {

  return (
    <HStack
      as="nav"
      aria-label="Main Navigation"
      spacing="8"
      {...props}
    >
      {items.map((item) => (
        <NavItem key={item.href} href={item.href} >
          {item.label}
        </NavItem>
       ))}
        <Button
          w="160px"
          h="50px"
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
      {...props}
    >
      {items.map((item) => (
        <NavItem key={item.label} href={item.href}  large >
          {item.label}
        </NavItem>
      ))}
      <Button
          w={{ base: '200px', md: '160px' }}
          h={{ base: '70px', md: '50px' }}
          bg={{ base: '#8a53ff' }}
          fontSize="32px"
        >
        Fazer login
      </Button>
    </Stack>
  );
}

function Headshot() {
  return (
    <Box>
        <VisuallyHidden>Home</VisuallyHidden>
        <Image
          
          alt="Segun Adebayo"
          src={logo}    
          width="50%"
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
        width="10"
        height="10"
        display={{ base: 'flex', md: 'none' }}
        as="button"
        aria-haspopup="true"
        aria-expanded={menu.isOpen}
        aria-controls="nav-menu"
        id="nav-menu--trigger"
        type="button"
        onClick={menu.onOpen}
      >
        {menu.isOpen ? <IoIosClose size={30}/> : <AiOutlineMenu size={30}/>}
      </Center>
      <Drawer isOpen={menu.isOpen} onClose={menu.onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent id="nav-menu" bg="#330693" padding="6" color="#FFF" fontSize="32px" _active={{color: '#FFF'}}>
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
