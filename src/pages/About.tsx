import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={2}>
        About Me
      </Heading>
      <Text fontSize="lg" color="gray.500">
        I am a passionate developer with a focus on building high-quality web
        applications.
      </Text>
    </Box>
  );
};

export default About;
