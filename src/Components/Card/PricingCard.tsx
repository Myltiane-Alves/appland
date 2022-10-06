import {
    Flex,
    Heading,
    Icon,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react'
  import { CheckIcon} from '@chakra-ui/icons'
  import * as React from 'react'
  import { Card, CardProps } from './Card'
 
  import './styles.css'

  export interface PricingCardData {
    features: string[]
    title: string
    name: string
    price: string
  }
  
  interface PricingCardProps extends CardProps {
    data: PricingCardData
    icon: React.ElementType
    button: React.ReactElement
  }
  
  export const PricingCard = (props: PricingCardProps) => {
    const { data, icon, button, ...rest } = props
    const { features, price, name, title } = data
    const accentColor = useColorModeValue('blue.600', 'blue.200')
  
    return (
      <Card rounded={{ sm: 'xl' }} {...rest} w="333px" mt="100px">
        <Stack spacing={6}>   
        <Text as="p" fontSize="20px" fontWeight="400" color="#8A53FF" textAlign="center">
            {title}
          </Text>
        </Stack>
        <VStack spacing={6}>   
          <Heading fontSize="22px" fontWeight="extrabold" color="#8A53FF">
            {name}
          </Heading>
        </VStack>
        <Flex align="flex-end" justify="center" fontWeight="extrabold" color={accentColor} my="8">
          <Heading fontSize="32px" fontWeight="inherit" lineHeight="0.9em" color="#8A53FF">
            {price}
          </Heading>
      
        </Flex>
        <List 
          spacing="4" 
          mb="8" 
          maxW="28ch" 
          mx="auto"
          alignContent="center"
          justifyContent="center"
        >
          {features.map((feature, index) => (
            <ListItem 
              fontWeight="medium" 
              key={index} 
              color="#8A53FF" 
              textAlign="center"
            >
              <Icon as={CheckIcon} color="#00DFF0"/>
              {feature}
            </ListItem>
          ))}
        </List>
        
      </Card>
    )
  }