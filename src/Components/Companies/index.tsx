
import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  Flex,
  Image,
  SimpleGrid
} from '@chakra-ui/react';

import Day from '../../assets/Day.png'
import cyber from '../../assets/cyber.png'
import connect from '../../assets/connect.png'
import sound from '../../assets/sound.png'
import './styles.css'
export default function Companies() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      pt={{ base: '0', md: '0' }}
      justifyItems="center"
      as="section"
    >

      <Box>    
        <Image
          width="200px"
          src={Day}
        />
      </Box>
      <Box>    
        <Image
          width="200px"
          src={cyber}
        />
      </Box>
      <Box>    
        <Image
          width="200px"
          src={connect}
        />
      </Box>
      <Box>    
        <Image
          width="200px"
          src={sound}
        />
      </Box>
    </SimpleGrid>
  )
}