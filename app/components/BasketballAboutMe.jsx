'use client'

import {
  AspectRatio,
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  List,
  ListItem,
} from '@chakra-ui/react'
import Link from 'next/link'; 
import { FaChildReaching, FaRegEye } from "react-icons/fa6";
import { FaClock, FaDribbble, FaPercentage, FaTimesCircle } from "react-icons/fa";
import YouTube from 'react-youtube';

export default function BasketballAboutMe() {
const width = useBreakpointValue({ base: "100%", md: "600px", lg: "600px" });
const height = useBreakpointValue({ base: "300px", md: "450px", lg: "450px" });
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={'7xl'}
    >
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 12, md: 16 }}
        py={{ base: 18, md: 24 }}>
        <Flex
            borderRadius="full"
            fit={'cover'}
            align={'center'}
        >
        <YouTube
            videoId="Coc_dT-jcOw"
            opts={{
                    height: height,
                    width: width,
                }}
            />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              About Me
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('#000000', 'white')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={'md'}>
             I&apos;m a versatile and experienced pro basketball player who is curently playing for CB Zaragoza in Spain. I&apos;m also a self-taught software developer who is passionate about coding and learning new technologies. I&apos;m currently working on a project that will help basketball players to improve their game by providing them with a platform where they can track their progress and get feedback from their coaches.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '24px', lg: '36px' }}
                fontWeight={'500'}
                textTransform={'uppercase'}
                my={'4'}>
                Current Stats
              </Text>

              <SimpleGrid 
              fontSize="20px" columns={{ sm: 1, base:3, md: 3, lg:3 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>
                    <Flex align="center">
                      <FaClock />
                      <Text ml={2}>28 min</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <FaDribbble/>
                      <Text ml={2}>14,5 Points</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <FaPercentage />
                      <Text ml={2}>52,5% T2</Text>
                    </Flex>
                  </ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>
                    <Flex align="center">
                    <FaPercentage />
                      <Text ml={2}>28,6% T3</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <FaChildReaching />
                      <Text ml={2}>8,6 Reb</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <FaRegEye />
                      <Text ml={2}>1,6 Assist</Text>
                    </Flex>
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>
          <Link href="https://baloncestoenvivo.feb.es/jugador/889440/2439563" >
          <Button
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
            <FaDribbble /> &nbsp; View My Stats on FEB 
            </Button>
          </Link>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}