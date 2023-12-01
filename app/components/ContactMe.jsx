"use client";
import React, { useState } from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea, Button, Container, Heading } from "@chakra-ui/react";
import { sendContactForm } from '@/lib/api';

const initValues = {name: "", email: "", subject: "", message: ""};
const initState = {values: initValues};

export default function ContactMe() {
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
 
    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        await sendContactForm(values);
    };


    return (
        <Container maxW={"450px"} mt={12}>
            <Heading mb={6}>Contact Me</Heading>
                <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
                    <FormLabel >Name</FormLabel>
                    <Input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={onBlur}
                        errorBorderColor='red.300'
                    />
                    <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>

                <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
                    <FormLabel >Email</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                        errorBorderColor='red.300'

                    />
                </FormControl>

                <FormControl isRequired isInvalid={touched.subject && !values.subject} mb={5}>
                    <FormLabel >Subject</FormLabel>
                    <Input
                        type="text"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={onBlur}
                        errorBorderColor='red.300'

                    />
                </FormControl>

                <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
                    <FormLabel >Message</FormLabel>
                    <Textarea
                        type="text"
                        name="message"
                        rows={6}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={onBlur}
                        errorBorderColor='red.300'
                    />
                </FormControl>
                <Button 
                mt={4} 
                variant={'outline'}
                disabled={!values.name || !values.email || !values.subject || !values.message}
                onClick={onSubmit}
                isLoading={isLoading}
                colorScheme="teal">Submit</Button>
        </Container>
    );
};

