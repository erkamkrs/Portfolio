'use client'


import { useState } from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useColorMode,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { useToast } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
const initValues = {name: "", email: "", message: ""};
const initState = {values: initValues};


export default function Contact() {
  const toast = useToast();
  const { colorMode } = useColorMode();
  const customColorway = colorMode === 'light' ? '#000000' : '#E6E6DD';
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading } = state;
  
  const onBlur = ({target}) => 
  setTouched((prev) => ({...prev, 
      [target.name]: true
  }));

  const handleChange = ({ target }) => 
      setState((prev) => ({
      ...prev, 
      values: {
          ...prev.values,
          [target.name]: target.value
      }
  }));

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      toast({
        title: "Success",
        description: "Message successfully sent",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      setState(initState);
    } catch (err) {
      toast({
        title: "Error",
        description: "Error, please try resubmitting the form",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }


  return (

    
    <Container
    id="contact"
    maxW="full" 
    mt={0} 
    centerContent
    overflow="hidden">
      <Flex>
        <Box
          bg={colorMode === 'light' ? '#E6E6DD' : '#776B5D'}
          color={colorMode === 'light' ? '#000000' : '#E6E6DD'}
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading fontSize={'6xl'}>Contact</Heading>
                  <Text
                    mt={{ sm: 3, md: 3, lg: 5 }}
                    fontSize={'18'}
                    color={customColorway}>
                    Fill up the form below or contact me through WhatsApp.
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color={colorMode === 'light' ? '#000000' : '#E6E6DD'}
                        _hover={{ border: '2px solid' }}
                        leftIcon={<MdPhone  color={colorMode === 'light' ? '#000000' : '#E6E6DD'} size="20px" />}>
                        +34 641963864
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color={colorMode === 'light' ? '#000000' : '#E6E6DD'}
                        _hover={{ border: '2px solid' }}
                        leftIcon={<MdEmail  color={colorMode === 'light' ? '#000000' : '#E6E6DD'} size="20px" />}>
                        ekiris@trendico.es
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color={colorMode === 'light' ? '#000000' : '#E6E6DD'}
                        _hover={{ border: '2px solid' }}
                        leftIcon={<MdLocationOn color={colorMode === 'light' ? '#000000' : '#E6E6DD'} size="20px" />}>
                        Zaragoza, Spain
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      onClick={() => window.location.href='https://www.linkedin.com/in/erkam-k-219890110/'}
                      isRound={true}
                      _hover={{ bg: '#000000' }}
                      icon={<FaLinkedin size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      onClick={() => window.location.href='https://github.com/erkamkrs'}
                      isRound={true}
                      _hover={{ bg: '#000000' }}
                      icon={<FaGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      onClick={() => window.location.href='https://twitter.com/erkamkiris'}
                      isRound={true}
                      _hover={{ bg: '#000000' }}
                      icon={<FaTwitter size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg={colorMode === 'light' ? '#E6E6DD' : '#776B5D'}>
                  <Box as="form" m={10} color="#white" onSubmit={handleSubmit} >
                    <VStack spacing={5}>
                    <FormControl id="form-name" isRequired isInvalid={touched.name && !values.name} mb={5}>
                      <FormLabel>Name</FormLabel>
                          <Input
                            borderColor="#000000"
                            _hover={{
                              borderRadius: '#000000',
                            }}
                            autoComplete='name'
                            placeholder="Name"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={onBlur}
                            errorBorderColor='red.300'
                        />
                        <FormErrorMessage>Required</FormErrorMessage>
                      </FormControl>
                    <FormControl id="form-email" isRequired isInvalid={touched.email && !values.email} mb={5}>
                      <FormLabel>Email</FormLabel>
                        <Input
                            borderColor="#000000"
                            _hover={{
                              borderRadius: '#000000',
                            }}
                            autoComplete='email'
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={onBlur}
                            errorBorderColor='red.300'
                        />
                      <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>

                    <FormControl id="form-message" isRequired isInvalid={touched.message && !values.message} mb={5}>
                      <FormLabel >Message</FormLabel>
                          <Textarea
                            borderColor="#000000"
                            _hover={{
                              borderRadius: '#000000',
                            }}
                            placeholder="Message"
                            type="text"
                            name="message"
                            rows={6}
                            value={values.message}
                            onChange={handleChange}
                            onBlur={onBlur}
                            errorBorderColor='red.300'
                        />
                      <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>

                      <FormControl float="right" size={'xl'}>
                        <Button
                          borderColor="#000000"
                          mt={4} 
                          variant={'outline'}
                          type="submit"
                          bg={colorMode === 'light' ? '#776B5D' : '#E6E6DD'}
                          color={
                            colorMode === 'light' ? '#E6E6DD' : '#000000'
                          }
                          _hover={{
                            bg: colorMode === 'light' ? '#000000' : '#000000',
                            color:
                              colorMode === 'light' ? '#E6E6DD' : '#776B5D',
                          }}
                          disabled={!values.name || !values.email || !values.subject || !values.message}
                          isLoading={isLoading}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
