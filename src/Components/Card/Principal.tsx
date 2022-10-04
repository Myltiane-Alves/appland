import { Box, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'

import { PricingCard } from './PricingCard'
import { CheckIcon} from '@chakra-ui/icons'
export const Principal = () => (
  <Box
    as="section"
    py="14"
    px={{ base: '4', md: '4' }}
  >
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2, xl: 4 }}
      spacing={{ base: '8', lg: '8' }}
      maxW="100%"
      mx="auto"
      justifyItems="center"
      alignItems="center"
      
    >
      <PricingCard
        bg={'rgba(255, 255, 255, 0.08)'}
        data={{
          title: 'Plano Bronze',
          price: 'R$ 30',
          name: 'Uso de 5 colaboradores',
          features: [
            'Área de meus registros',
            'Dashboard',
            'Acesso de 5 colaboradores',
            'Suporte exclusivo',
            'Email corporativo',
          ],
        }}
        icon={CheckIcon}
        
      />
      <PricingCard
        bg={'rgba(255, 255, 255, 0.08)'}
        data={{
          title: 'Plano Prata',
          price: 'R$ 50',
          name: 'Uso de 10 colaboradores',
          features: [
            'Área de meus registros',
            'Dashboard',
            'Acesso de 10 colaboradores',
            'Suporte exclusivo',
            'Email corporativo',
          ],
        }}
        icon={CheckIcon}
        
      />
      <PricingCard
        bg={'rgba(255, 255, 255, 0.08)'}
        data={{
          title: 'Plano Ouro',
          price: 'R$ 100',
          name: 'Uso de 20 colaboradores',
          features: [
            'Área de meus registros',
            'Dashboard',
            'Acesso de 10 colaboradores',
            'Suporte exclusivo',
            'Email corporativo',
          ],
        }}
        icon={CheckIcon}
      />
      <PricingCard
        bg={'rgba(255, 255, 255, 0.08)'}
        data={{
          title: 'Plano Platina',
          price: 'R$ 200',
          name: 'Acessos ilimitados',
          features: [
            'Área de meus registros',
            'Dashboard',
            'Acesso de 10 colaboradores',
            'Suporte exclusivo',
            'Email corporativo',
          ],
        }}
        
        icon={CheckIcon}
      />
    </SimpleGrid>
  </Box>
)