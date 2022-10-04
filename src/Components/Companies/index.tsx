
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

import brainnyLogo from '../../assets/brainny-logo.svg'
import amoPetLogo from '../../assets/amopet-logo.png'
import busLogo from '../../assets/bus-logo.png'
import goStudyLogo from '../../assets/go-study-logo.png'
import './styles.css'
export default function Companies() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      pt={{ base: '0', md: '20' }}
      justifyItems="center"
      as="section"
    >

      <Box>    
        <Image
          width="200px"
          src={brainnyLogo}
        />
      </Box>
      <Box>    
        <Image
          width="200px"
          src={amoPetLogo}
        />
      </Box>
      <Box>    
        <Image
          width="200px"
          src={busLogo}
        />
      </Box>
      <Box>    
        <Image
          width="200px"
          src={goStudyLogo}
        />
      </Box>
    </SimpleGrid>
  )
}