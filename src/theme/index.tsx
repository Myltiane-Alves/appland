import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "320px",
  sm: "320px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

const colors = {
  brand: {
    primary: "#330693",
    secondary: "#8a53ff",
    grey: "#20292E",
    white: "#FFFFFF"
  }
  
}

export const theme = extendTheme({
  colors,
  breakpoints,
})