import React from 'react'
import Nav from '../../Components/NavBar/nav'

import './home.css'
import Header from '../../Components/Header'
import Companies from '../../Components/Companies'
import { Box, Container, Flex } from '@chakra-ui/react'
import Title from '../../Components/Title'
import Card from '../../Components/Card'
import Footer from '../../Components/Footer'
import NavBar from '../../Components/NavBar/nav'
import { Principal } from '../../Components/Card/principal'
import FooterText from '../../Components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
   
      <Companies />
      <Title />
      <Principal />
      <Footer />
      
    </>
  )
}