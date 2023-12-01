'use client'

import {
  Avatar,
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  useColorMode
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'



const SocialButton = ({
    
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
    const { colorMode, toggleColorMode } = useColorMode()
    const logoSrc = colorMode === 'light' ? './light-logo.png' : './dark-logo.png'
  return (
    <Box
      bg={useColorModeValue("#E6E6DD" , '#000000')}
      color={useColorModeValue('#000000', "#E6E6DD")}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Box>
          <Avatar size={"md"} src={logoSrc} />
          </Box>
        <Text>© 2023 Made by Erkam Kiris</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'https://twitter.com/erkamkiris'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Github'} href={'https://github.com/erkamkrs'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/erkamkiris/'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}