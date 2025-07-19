
import { Box, Heading, Input, Textarea, Button, Stack, Text } from "@chakra-ui/react";

export default function ContactUs() {
    return (
        <Box maxW="700px" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
            <Heading mb={6} fontSize="2xl" textAlign="center">Contact Us</Heading>
            <Stack spacing={4}>
                <Input placeholder="Your Name" size="lg" />
                <Input placeholder="Your Email" size="lg" type="email" />
                <Textarea placeholder="Your Message" size="lg" rows={6} />
                <Button colorScheme="teal" size="lg" type="submit">
                    Send Message
                </Button>
            </Stack>
            <Text mt={4} textAlign="center" color="gray.600">
                We'll get back to you as soon as possible.
            </Text>
        </Box>
    );
}
