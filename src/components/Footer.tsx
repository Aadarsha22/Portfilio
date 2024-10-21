import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg="gray.800"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      py={4}
      px={{ base: 2, md: 4 }}
      w="100%"
    >
      <Text
        textAlign="center"
        color="white"
        fontSize={{ base: "sm", md: "md" }}
      >
        {" "}
        &copy; 2024 My Portfolio. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
