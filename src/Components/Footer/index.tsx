
import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,

} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <SimpleGrid as="footer" role="contentinfo">
      <Stack
        spacing="8"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        py={{ base: '12', md: '16' }}
      >
        <Stack spacing={{ base: '6', md: '8' }} align="start">
          <Image src={logo} alt="logo" />
          <Text 
            color="#00DFF0"
            fontSize="20px"
            fontWeight="600"
            lineHeight="30px"
            fontFamily="Poppins"
          >
              Crie belos sites incrivelmente rápidos.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
          spacing={{ base: '12', md: '8' }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Text 
                fontSize="18px" 
                fontWeight="600" 
                color="#00DFF0"
              >
                Produtos
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">Como funciona</Button>
                <Button variant="link">Planos</Button>
                <Button variant="link">Casos de Usos</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text 
                fontSize="18px" 
                fontWeight="600" 
                color="#00DFF0"
              >
                Jurídico
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">Privacidade</Button>
                <Button variant="link">Termos</Button>
                <Button variant="link">Licença</Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing="4">
            <Text 
              fontSize="18px" 
              fontWeight="600" 
              color="#00DFF0"
            >
              Siga-nos
            </Text>
            <Stack spacing="4" direction={{ base: 'column', sm: 'row' }} maxW={{ lg: '360px' }}>
              <Input placeholder="Envie Seu Email" type="email" required/>
              <Button 
                variant="primary"
                type="submit"
                flexShrink={0} 
                color="#fff"
                bg="#00DFF0"
                _hover={{ bg: '#00dff0d4', color: '#fff' }}
              >
                Saiba mais
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="#FFF">
          &copy; {new Date().getFullYear()} Todos os Direitos Reservados Myltiane Alves.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" color="#FFF"/>}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" color="#FFF"/>} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" color="#FFF"/>} />
        </ButtonGroup>
      </Stack>
    </SimpleGrid>
  )
}