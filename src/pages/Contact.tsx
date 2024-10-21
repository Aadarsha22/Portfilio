import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  chakra,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import emailjs from "emailjs-com";

const fadeInUp = keyframes`
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      `;

const MotionHeading = chakra(motion.h1);
const MotionBox = chakra(motion.div);

const Contact = () => {
  const toast = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      from_name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      from_email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        ?.value,
    };

    if (
      !formData.from_name ||
      !formData.from_email ||
      !formData.subject ||
      !formData.message
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    emailjs.send("service_id", "template_id", formData, "public_key").then(
      (result) => {
        console.log(result.text);
        toast({
          title: "Success",
          description: "Message sent successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        form.reset();
      },
      (error) => {
        console.error(error.text);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    );
  };

  return (
    <Box
      textAlign="center"
      bg="black"
      py={10}
      px={{ base: 4, md: 6 }}
      minHeight="100vh"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <MotionHeading
        as="h1"
        mb={4}
        color="gray.400"
        fontSize={{ base: "3xl", md: "4xl" }}
        animation={`${fadeInUp} 1s ease-in-out`}
      >
        Get In Touch
      </MotionHeading>
      <MotionBox
        w={{ base: "100%", md: "60%", lg: "40%" }}
        mx="auto"
        animation={`${fadeInUp} 1.5s ease-in-out`}
      >
        <form onSubmit={sendEmail}>
          <FormControl mb={4} isRequired>
            <FormLabel color={"white"}>Full Name</FormLabel>
            <Input
              name="name"
              type="text"
              color={"white"}
              bg="gray.700"
              borderColor="gray.600"
              _placeholder={{ color: "gray.400" }}
              placeholder="Enter your full name"
              size="lg"
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel color={"white"}>Email Address</FormLabel>
            <Input
              name="email"
              type="email"
              color={"white"}
              bg="gray.700"
              borderColor="gray.600"
              _placeholder={{ color: "gray.400" }}
              placeholder="Enter your email"
              size="lg"
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel color={"white"}>Subject</FormLabel>
            <Input
              name="subject"
              type="text"
              color={"white"}
              bg="gray.700"
              borderColor="gray.600"
              _placeholder={{ color: "gray.400" }}
              placeholder="Enter the subject"
              size="lg"
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel color={"white"}>Message</FormLabel>
            <Textarea
              name="message"
              color={"white"}
              bg="gray.700"
              borderColor="gray.600"
              _placeholder={{ color: "gray.400" }}
              placeholder="Type your message here"
              size="lg"
              minH="120px"
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="red"
            size="lg"
            width="full"
            aria-label="Send Message"
          >
            Send Message
          </Button>
        </form>
      </MotionBox>
    </Box>
  );
};

export default Contact;
