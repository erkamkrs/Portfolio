'use client'

import {
  Box,
  Flex,
  Avatar,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { MoonIcon, SunIcon, DownloadIcon } from '@chakra-ui/icons'
import { FaDribbble } from 'react-icons/fa'

const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue("#E6E6DD" , '#000000'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const logoSrc = colorMode === 'light' ? './light-logo.png' : './dark-logo.png'

  return (
    <>
      <Box 
      bg={useColorModeValue("#E6E6DD" , '#000000')} 
      px={4}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
          <Avatar size={"lg"} src={logoSrc} />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <Button as="a" href="./erkam_cv.pdf" download>
              <DownloadIcon /> &nbsp; Download Resume
            </Button>
            <Button onClick={() => window.location.href='/basketball'}>
              <FaDribbble /> &nbsp; View Basketball
            </Button>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}