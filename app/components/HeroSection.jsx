'use client'
import { useEffect } from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react'
import { DownloadIcon, ChatIcon} from '@chakra-ui/icons'

import Logo from './Logo';
import TypingAnimation from './TypingAnimation';
import { Link as ScrollLink } from 'react-scroll';
import { FaDribbble } from 'react-icons/fa';


export default function HeroSection() {
  const { colorMode, toggleColorMode } = useColorMode()
  const logoSrc = colorMode === 'light' ? './light-logo.png' : './dark-logo.png'
 
  

return (
  <Container 
    maxW={'full'}
  >
    <Stack
        align={{ base: 'center', md: 'start' }} 
        spacing={{ base: 8, md: 10, lg: 12 }}
        py={{ base: 10, md: 20, lg: 24 }}
        direction={{ base: 'column-reverse', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 6, md: 10, lg: 20 }}>
          <Heading
            lineHeight={1.1}
            >
            <Text
              as={'span'}
              fontSize={{ base: '6xl', sm: '6xl', lg: '7xl', xl: '8xl' }}
              position={'relative'}
              fontWeight={'bold'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}>
              Erkam Kiris
            </Text>
          </Heading>
          <TypingAnimation />
        <Text 
        fontSize={{ base: 'lg', sm: 'xl', lg: '2xl', }}
        color={'gray.500'}
        >
        Software developer and Basketball player who is passionate about learning new technologies and sports. 
        In the mornings I write code and drink coffee at <a href="https://www.trendico.es">Trendico</a>. At night I shoot hoops and get buckets for <a href="https://cbzaragoza.com/">CB Zaragoza</a>.
        </Text>
        <Stack spacing={{ base: 4, sm: 6, lg: 8 }} direction={{ base: 'column', sm: 'row' }}>
        <Button
          as={ScrollLink}
          to="contact" 
          smooth={true}
          duration={500}
          rounded={'full'}
          size={'lg'}
          fontWeight={'normal'}
          px={6}
          bg={colorMode === 'light' ? '#E6E6DD' : '#776B5D'}
          color={colorMode === 'light' ? '#000000' : '#000000'}
          _hover={{
              bg: colorMode === 'light' ? '#000000' : '#000000',
              color: colorMode === 'light' ? '#E6E6DD' : '#776B5D'
          }}
          >
          <ChatIcon /> &nbsp; Contact Me
          </Button>
          <Button
          as="a" 
          href="/erkam_cv.pdf"
          download
          rounded={'full'}
          size={'lg'}
          fontWeight={'normal'}
          px={6}
          bg={colorMode === 'light' ? '#776B5D' : '#E6E6DD'}
          color={colorMode === 'light' ? '#E6E6DD' : '#000000'}
          _hover={{
              bg: colorMode === 'light' ? '#000000' : '#000000',
              color: colorMode === 'light' ? '#E6E6DD' : '#776B5D'
          }}
          >
            <DownloadIcon /> &nbsp; Download Resume
          </Button>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        >
        <Box
          position={'relative'}
          rounded={'full'}
          boxShadow={'2xl'}
          height={{base: '200px', md: '150px', lg: '400px'}}
          width={{base: '300px', md: '200px', lg: '600px'}}
          overflow={'hidden'}
          p={{base: '8', sm: '4', lg: '10'}}
          bg={'#E6E6DD'}
          >
          <Logo />
        </Box>
      </Flex>
    </Stack>
  </Container>
)
}

