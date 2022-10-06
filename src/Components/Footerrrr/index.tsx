
import {
  Text,
  Box,
  Stack,
  Image,
  Flex,
  SimpleGrid,
  HStack

} from '@chakra-ui/react';

import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

export default function FooterText() {
  return (
    <SimpleGrid 
      as="footer"
      columns={{ base: 1, md: 2, lg: 2 }}
      borderTop="1px  solid #8A53FF"
      borderBottom="1px  solid #8A53FF"
      width="100%"
      p="0"
      alignContent="center"
    >
      
      <Box
      >
        <Text
          as="p"
          fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          textAlign={{ base: "center", md: "end", lg: "end" }}
          fontWeight="700"
          lineHeight="30px"
          color="#ffffff"
          pr="100px"
        >
          @pontogo
        </Text>

        <Text
          as="p"
          fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          textAlign={{ base: "center", md: "end" }}
          fontWeight="300"
          lineHeight="30px"
          color="#ffffff"

        >
          Se conecta com a gente
        </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        display="flex"
        pl="60px"
        justifyContent={{ base: "flex-start", md: "flex-start", lg: "flex-start" }}
        pt={{ base: "20px", md: "0", lg: "0" }}
        pb={{ base: "20px", md: "0", lg: "0" }}
      
      >

        <Image src={instagram}  alt="Instagram"/>
        <Image src={facebook}  alt="Facebook"/>
        <Image src={linkedin}  alt="Linkedin"/>
              
      </SimpleGrid>
    </SimpleGrid>
  )
}