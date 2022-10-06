import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import header from "../../assets/header-img.png";
export default function ContentHeader() {

  return (
    <SimpleGrid
      gap="20"
      columns={{ base: 1, md: 2, lg: 2, xl: 2 }}

    >
      <Box
        maxWidth={{ md: '27.rem' }}
        flex="1"
        pt="70px"

      >
        <Stack>
          <Text
            as="p"
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            fontWeight="400"
            lineHeight="36px"
            color="#8A53FF"
            textAlign="left"
          >
            Esquece o ponto manual
          </Text>
        </Stack>
        <Box>

          <Heading
            as="h1"
            fontSize={{ base: "24px", md: "32px", lg: "40px" }}
            fontWeight="800"
            lineHeight={{ base: "36px", md: "48px", lg: "60px" }}
            color="#8A53FF"
            textAlign="left"
          >
            Chegou a nova realidade
            para Controle de Pontos
          </Heading>
        </Box>
        <Box>

          <Text
            as="p"
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            fontWeight="500"
            lineHeight={{ base: "30px", md: "36px", lg: "40px" }}
            color="#8A53FF"
            textAlign="left"
            pt="24px"
          >
            Com a BatePonto seus colaboradores poderão bater seus pontos de forma fácil e rápida,
            possuindo também uma Dashboard intuitiva.
          </Text>
        </Box>
        <Box
          pt="30px"
          display="flex"
          alignItems="left"
        >
          <Button
            bg="#8A53FF"
            _hover={{ bg: '#8a53ffb0', color: '#fff' }}
            borderRadius="5px"
            border="none"
            mr="15px"
            color="#fff"
            w="200px"
            h="50px"
          >

            ASSINAR AGORA

          </Button>
          <Button
            bg="#00DFF0 "
            border="none"
            borderRadius="5px"
            _hover={{ bg: '#00dff0d4', color: '#fff' }}
            color="#282828"
            w="200px"
            h="50px"
           
          >
            VER PLANOS

          </Button>
        </Box>
      </Box>

      <ProjectImage src={header} alt="header" />
    </SimpleGrid>
  );
};

type ProjectImageProps = {
  src?: string;
  alt: string;
  objectPosition?: string;
};

function ProjectImage(props: ProjectImageProps) {
  const { src, alt } = props
  return (
    <Flex
      flex={{ md: '1' }}
      position="relative"
      height={{ base: '30rem', md: '40rem' }}
      width={{ base: '100%', md: '100%' }}
      overflow="hidden"

    >
      <Box
        position="absolute"
        height={{ base: '18rem', md: '19rem', lg: '27rem', xl: '35rem' }}
        rounded="lg"
        overflow="hidden"
        pt={{ base: '0', md: '30px' }}
      >

        <Image
          src={src}
          alt={alt}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
    </Flex>

  )
}