
import {
  Heading,
  Text,
  Box,

  ListItem,


  SimpleGrid,
  MenuItem,
  MenuList,
  List,
  Stack

} from '@chakra-ui/react';
import { BsCheck } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

export default function Card() {
  return (
    <SimpleGrid
      gap="20"
      columns={{ base: 1, md: 2, lg: 3 }}
    >
      <Box
        // flex="wrap"
        gap="24px"
        mt="2.5rem"
        pt="2.5rem"
        pb="2.5rem"
        padding-inline-start="1.5rem"
        padding-inline-end="1.5rem"
        position="relative"
        overflow="hidden"
        justifyContent="space-evenly"
        bg="rgba(255, 255, 255, 0.08)"
        border="1px solid #8a53ff"
        borderRadius="10px"
        // width="300px"
        // height="491px"
      >
        <Text
          as="p"
          pt="20px"
          fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          fontWeight="400"
          lineHeight="30px"
          color="#ffffff"
          textAlign="center"
        >
          Plano Prata
        </Text>
        <Heading
          as="h2"
          fontSize="50px" 
          fontWeight="800"
          lineHeight="75px"
          color="#ffffff"
          textAlign="center"
        >
          R$ 50
        </Heading>
        <Text
          as="p"
          fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          fontWeight="300"
          lineHeight="24px"
          color="#8A53FF"
          textAlign="center"
        >
          Uso de 10 colaboradores
        </Text>
        <Stack
          flexDirection="column"
          display="flex"
          mt="32px"
          h="300px"
          bg="yellow"
        >
          <Stack
            mt="2rem"
          >

            <List
              justifyContent="center"
              flex={1}
              gap="20px"
              bg="red"
            
            >
              <ListItem display="flex" flexDirection="row" alignItems="center" >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flex-shrink={0}
                  flex-grow={0}
                  width="1.5rem"
                  height="1.5rem"
                >
                  <BsCheck  color="#fff"  />
                </Box>
                <Text
                  as="p"
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  fontWeight="300"
                  lineHeight="24px"
                  color="#FFF"
                  textAlign="left"
                  margin-inline-start="0.75rem"
                >
                  Área de meus registros
                </Text>  
              </ListItem>
              <ListItem display="flex" flexDirection="row" >
                <BsCheck color="#fff" />
                <Text
                  as="p"
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  fontWeight="300"
                  lineHeight="24px"
                  color="#FFF"
                  textAlign="center"
                >
                  
                  Dashboard
                </Text>  
              </ListItem>
              <ListItem display="flex" flexDirection="row" >
                <BsCheck color="#fff" />
                <Text
                  as="p"
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  fontWeight="300"
                  lineHeight="24px"
                  color="#FFF"
                  textAlign="center"
                >
            
                  Acesso de 10 colaboradores
                </Text>  
              </ListItem>
              <ListItem display="flex" flexDirection="row">
                <BsCheck color="#fff" />
                <Text
                  as="p"
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  fontWeight="300"
                  lineHeight="24px"
                  color="#FFF"
                  textAlign="center"
                >
                  
                  Suporte exclusivo
                </Text>  
              </ListItem>
              <ListItem display="flex" flexDirection="row" >
                <BsCheck color="#fff" />
                <Text
                  as="p"
                  fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                  fontWeight="300"
                  lineHeight="24px"
                  color="#FFF"
                  textAlign="left"
                >
                  
                  Email corporativo
                </Text>  
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </Box>
    
    
    </SimpleGrid>
  )
}