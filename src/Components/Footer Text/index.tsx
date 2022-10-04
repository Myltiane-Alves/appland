
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
    <Box
      as="footer"
      width="100%"
      pt="60px"
      alignContent="center"
    >


      <Text
        as="p"
        fontSize={{ base: "16px", md: "18px", lg: "20px" }}
        textAlign="center"
        fontWeight="400"
        lineHeight="24px"
        color="#ffffff"
      >
         PontoGo - Todos direitos reservados
      </Text>


    </Box>
  )
}