'use client'

import {
    Box,
    Container,
    Stack,
    Text,
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
import { IoLogoGithub } from "react-icons/io";
import { IoLogoReact, IoLogoVercel } from "react-icons/io5";
import { SiChakraui, SiNextdotjs} from "react-icons/si";
import { FaGoogle } from "react-icons/fa";

export default function RecentProject() {
    const { colorMode, toggleColorMode } = useColorMode()
    const isLargeScreen = useBreakpointValue({ base: false, md: false, lg: true });

    return (
        <Container maxW={'7xl'} py={{base:"16", sm: '16', md: '12', lg: '112'}}>
            <Box as={'header'} textAlign={'center'}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', lg: '6xl' }}
                >
                    Recent Personal Project
                </Heading>
            </Box>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 12, md: 16 }}
                py={{ base: 12, md: 16 }}
            >
                {!isLargeScreen && (
                    <Flex justifyContent="center" alignItems="center">
                        <Stack
                            alignContent={'center'}
                            boxShadow={'2xl'}
                            position={'center'}
                            height={{ sm: '150px', md: '300px', lg: '320px' }}
                            width={{ sm: '300px', md: '600px', lg: '640px' }}
                        >
                            <video
                                src={'./fitterk-recording.mp4'}
                                align={'center'}
                                style={{
                                    objectFit: 'cover',
                                }}
                                loop
                                muted
                                autoPlay
                            />
                        </Stack>
                    </Flex>
                )}
                <Stack spacing={{ base: 8, md: 12 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ sm: '3xl', md: '4xl', lg: '5xl' }}
                    >
                        FITTERK
                    </Heading>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider borderColor={useColorModeValue('#000000', 'white')} />
                        }
                    >
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text fontSize={'md'}>
                                FITTERK is a fitness app designed for resistance training. It allows users to create, track, and update their daily workout routines. The app provides a user-friendly interface to select exercises based on specific body parts, add sets and repetitions, and track progress over time.
                            </Text>
                        </VStack>
                        <Box 
                         >
                            <Text
                                fontSize={{ base: '16px', lg: '24' }}
                                fontWeight={'500'}
                                my={'4'}
                            >
                                Technologies Used
                            </Text>

                            <SimpleGrid
                                fontSize={{ sm: 8, md: 20, lg: 24 }}
                                columns={{ sm: 1, base: 3, md: 3, lg: 3 }}
                                spacing={10}
                                >
                                <List spacing={2}
                                textAlign={"center"}>
                                    <ListItem>
                                        <Flex align="center">
                                            <FaGoogle />
                                            <Text ml={2}>Firestore</Text>
                                        </Flex>
                                    </ListItem>
                                    <ListItem>
                                        <Flex align="center">
                                            <IoLogoReact />
                                            <Text ml={2}>React</Text>
                                        </Flex>
                                    </ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>
                                        <Flex align="center">
                                            <SiNextdotjs />
                                            <Text ml={2}>NextJS</Text>
                                        </Flex>
                                    </ListItem>
                                    <ListItem>
                                        <Flex align="center">
                                            <SiChakraui />
                                            <Text ml={2}>ChakraUI</Text>
                                        </Flex>
                                    </ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                        </Stack>

                    <Stack spacing={{ base: 4, sm: 6, lg: 8 }} direction={{ base: 'column', sm: 'row' }}>
                    <Link href="https://fitterk.vercel.app/">
                        <Button
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
                            <IoLogoVercel /> &nbsp; Visit App
                        </Button>
                    </Link>
                    <Link href="https://github.com/erkamkrs/fitterk/">
                        <Button
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
                            <IoLogoGithub /> &nbsp; Visit Repo
                        </Button>
                    </Link>
                    </Stack>    
                </Stack>
                {isLargeScreen && (
                    <Flex justifyContent="center" alignItems="center">
                        <Stack
                            alignContent={'center'}
                            boxShadow={'2xl'}
                            position={'center'}
                            height={{ sm: '150px', md: '300px', lg: '320px' }}
                            width={{ sm: '300px', md: '600px', lg: '640px' }}
                        >
                            <video
                                src={'./fitterk-recording.mp4'}
                                align={'center'}
                                style={{
                                    objectFit: 'cover',
                                }}
                                loop
                                muted
                                autoPlay
                            />
                        </Stack>
                    </Flex>
                )}
            </SimpleGrid>
        </Container>
    )
};