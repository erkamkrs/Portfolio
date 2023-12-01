
"use client"
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react';
import Link from 'next/link';

export default function ContactForm() {
  const toast = useToast();

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
    <Box as="main" display="flex" minHeight="100vh" flexDirection="column" alignItems="center">
      <Box as="div" p={5} backgroundColor="white" color="black">
        <Link href="/">Home</Link>
      </Box>

      <Box as="form" onSubmit={handleSubmit} mt={8} mb={2} w="80" maxW="screen-lg" sm={{ w: "96" }}>
        <FormControl id="form-name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Input autoComplete="name" maxLength={50} size="lg" name="name" />
        </FormControl>

        <FormControl id="form-email" mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input autoComplete="email" maxLength={80} name="email" type="email" />
        </FormControl>

        <FormControl id="form-message" mb={4} isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea name="message" rows={5} />
        </FormControl>

        <Button colorScheme="teal" type="submit">Send</Button>
      </Box>
    </Box>
  );
}