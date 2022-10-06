
import {
  Heading,
  Text,
  Stack,
  Box,
  Flex,
} from '@chakra-ui/react';


export default function Title() {
  return (
    <Stack
      flex="wrap"
      gap="24px"
      mt="34px"
      justifyContent="space-evenly"
      direction="column"
      display="block"
    
    >
      <Heading
        as="h2"
        fontSize={{ base: "24px", md: "32px", lg: "40px" }}
        fontWeight="800"
        lineHeight="60px"
        color="#8A53FF"
        textAlign="center"
      >
        Encontre o plano perfeito
      </Heading>
 

      <Text
        as="p"
        fontSize={{ base: "16px", md: "18px", lg: "20px" }}
        fontWeight="600"
        lineHeight="30px"
        color="#8A53FF"
        textAlign="center"
        opacity="70%"
      >
        Escolha o plano que melhor se encaixa na sua empresa e  faça
      </Text>

      <Text
        as="p"
        fontSize={{ base: "16px", md: "18px", lg: "20px" }}
        fontWeight="600"
        lineHeight="30px"
        color="#8A53FF"
        textAlign="center"
        opacity="70%"
      >
        sua assinatura, dentro de 72h iremos liberar seus acessos.
      </Text>

    </Stack>
  )
}