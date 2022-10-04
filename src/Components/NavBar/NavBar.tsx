import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    Image,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
  } from '@chakra-ui/react'
  import React, { useEffect } from "react";
  import { FiMenu } from 'react-icons/fi'
  import logo from '../../assets/logo.png'
  
  export const NavBar = () => {
    const menu = useDisclosure();
    
    const breakpoint = useBreakpointValue({ base: true, md: false });

    useEffect(() => {
        if (menu.isOpen && !breakpoint) {
          menu.onClose();
        }
    }, [breakpoint, menu]);

    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
      <Box as="section" pb={{ base: '12', md: '24' }}>
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
          <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="10" justify="space-between">
                <Box>

                 <Image src={logo} alt="logo" />
                </Box>
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                      <Button color="#FFF" key={item}>{item}</Button>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Button bg="#FFF" variant="ghost">Fazer Login</Button>
                    
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                  onClick={menu.onOpen}
                  isOpen={menu.isOpen} onClose={menu.onClose}
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }

  export default NavBar;