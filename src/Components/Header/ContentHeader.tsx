import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import header from "../../assets/header-img.png";
export default function ContentHeader() {

  return (
    <Flex
      gap="20"
      direction={{ base: "column", md: "row" }}
    >
      <Box maxWidth={{ md: '27.rem' }} flex="1">
        <Stack>
          <Text
            as="p"
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            fontWeight="400"
            lineHeight="36px"
            color="#ffffff"
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
            color="#ffffff"
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
            lineHeight={{ base: "30px", md: "36px", lg: "48px" }}
            color="#ffffff"
            textAlign="left"
            pt="24px"
          >
            Com o PontoGo seus colaboradores poderão bater seus pontos de forma fácil e rápida,
            possuindo também uma Dashboard intuitiva.
          </Text>
        </Box>
        <Box
          pt="30px"
          display="flex"
          alignItems="left"
        >
          <Button
            bg="#8a53ff"
            borderRadius="5px"
            mr="15px"
          >
            <Link
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
              color="#fff"
            >
              Assinar Agora
            </Link>
          </Button>
          <Button
            bg="transparent"
            border="1px solid #fff"
            borderRadius="5px"
          >
            <Link
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
              color="#fff"
            >
              Ver Planos
            </Link>
          </Button>
        </Box>
      </Box>

      <ProjectImage src={header} alt="header" />
    </Flex>
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
    <Box
      flex={{ md: '1' }}
      position="relative"
      height="25rem"
      width="100%"
      overflow="hidden"
    >
      <Box
        position="absolute"
        left="10"
        top="10"
        
        height="31.25rem"
        rounded="lg"
        overflow="hidden"
       
      >

        <Image
          src={src}
          alt={alt}
          objectFit="cover"
          width="100%"
        />
      </Box>
    </Box>

  )
}