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
          <Text as="p" fontSize="20px" fontWeight="400" color="#FFF">
            {title}
          </Text>
        </Stack>
        <VStack spacing={6}>   
          <Heading size="md" fontWeight="extrabold" color="#FFF">
            {name}
          </Heading>
        </VStack>
        <Flex align="flex-end" justify="center" fontWeight="extrabold" color={accentColor} my="8">
          <Heading size="3xl" fontWeight="inherit" lineHeight="0.9em" color="#fff">
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
              color="#FFF" 
              textAlign="center"
            >
              <Icon as={CheckIcon} color="#FFF"/>
              {feature}
            </ListItem>
          ))}
        </List>
        
      </Card>
    )
  }