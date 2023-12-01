'use client'

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, DownloadIcon } from '@chakra-ui/icons'

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
            <Button as="a" href="./ERKAM_CV.pdf" download>
              <DownloadIcon /> &nbsp; Download Resume
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