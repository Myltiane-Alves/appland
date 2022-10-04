
import {
  Text,
  Box,
  Stack,
  Image,
  Flex

} from '@chakra-ui/react';

import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

export default function Footer() {
  return (
    <Stack>
      
      <Box
      >
        <Text
          as="p"
          fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          fontWeight="700"
          lineHeight="30px"
          color="#ffffff"
        >
          @pontogo
        </Text>

        <Text
          as="p"
          fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          fontWeight="300"
          lineHeight="30px"
          color="#ffffff"

        >
          Se conecta com a gente
        </Text>
      </Box>
      <Flex
        display="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="space-between"
        
      >

        <Box
        >
          <Image src={instagram}  alt="Instagram"/>
        </Box>
        <Box
        >
          <Image src={facebook}  alt="Facebook"/>
        </Box>
        <Box
        >
          <Image src={linkedin}  alt="Linkedin"/>
        </Box>
      </Flex>
    </Stack>
  )
}