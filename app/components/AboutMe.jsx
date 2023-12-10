'use client'

import {
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
  List,
  ListItem,
} from '@chakra-ui/react'
import Link from 'next/link'; // or from 'react-router-dom'
import { IoLogoGithub, IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiChakraui, SiCucumber, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaDotCircle, FaFlask } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
export default function AboutMe() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={'7xl'}
    >
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 12, md: 16 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            borderRadius="full"
            alt={'about me image'}
            src={'./erkam.jpg'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
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
             I&apos;m a dynamic and detail-oriented software developer skilled in Python, XML, SQL, JavaScript, with a specialization in the Odoo and Next JS frameworks. 
            My expertise lies in tailoring applications to meet specific company needs, particularly in logistics, ecommerce, and warehouse management.
            Driven by a passion for creating efficient solutions, I thrive in collaborative environments, working closely with cross-functional teams to analyze requirements and implement custom features.
            Meticulous about code quality, I conduct thorough reviews to ensure adherence to best practices.
            With a comprehensive understanding of the software development lifecycle, from design to ongoing maintenance, I am committed to delivering impactful solutions. 
            I take pride in my ability to swiftly identify and resolve issues, providing timely support to end-users.
            Always eager to embrace new challenges, I stay updated on industry trends and emerging technologies. 
            My goal is to bring a forward-thinking perspective to every project, ensuring it not only meets but exceeds expectations.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '24px', lg: '36px' }}
                fontWeight={'500'}
                textTransform={'uppercase'}
                my={'4'}>
                Skills
              </Text>

              <SimpleGrid 
              fontSize="20px" columns={{ sm: 1, base:3, md: 3, lg:3 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>
                    <Flex align="center">
                      <IoLogoPython />
                      <Text ml={2}>Python</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <IoLogoJavascript/>
                      <Text ml={2}>JS</Text>
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
                      <Text ml={2}>Next JS</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <FaDotCircle />
                      <Text ml={2}>Odoo</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <SiPostgresql />
                      <Text ml={2}>SQL</Text>
                    </Flex>
                  </ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>
                    <Flex align="center">
                      <SiChakraui />
                      <Text ml={2}>Chakra UI</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <SiTailwindcss />
                      <Text ml={2}>Tailwind CSS</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center">
                      <FaFlask />
                      <Text ml={2}>Flask</Text>
                    </Flex>
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>
          <Link href="https://github.com/erkamkrs" >
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
            <IoLogoGithub /> &nbsp; View My Projects on Github 
            </Button>
          </Link>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}