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
import ContentHeader from "./ContentHeader";
const Header = () => {

  return (
    <Box as="section" h="auto" >
      <Box >
        <ContentHeader />
      </Box>
    </Box>
  );
};

export default Header;
