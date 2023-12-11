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
import NavLink from './NavLink';
import { MoonIcon, SunIcon, DownloadIcon } from '@chakra-ui/icons'
import { FaDribbble } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6';




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
              <DownloadIcon /> &nbsp; CV
            </Button>

            <NavLink href='/basketball'>
              <Button>
                  <FaDribbble /> 
              </Button>
            </NavLink>

            <NavLink href='/'>
              <Button>
                  <FaComputer /> 
              </Button>
            </NavLink>

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