import {
  Box,
  Flex,
  Stack,
  chakra,
  Text,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import AadarshaImage from "../assets/Aadarsha.jpg";

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

const zoomIn = keyframes`
      0% {
        transform: scale(0.8);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    `;

const MotionHeading = chakra(motion.h1);
const MotionBox = chakra(motion.div);
const MotionImage = chakra(motion.img);

const Home = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      textAlign="center"
      bg="black"
      color="white"
      py={10}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <MotionHeading
        fontSize={["6vw", "8vw", "8vw"]}
        fontWeight="bold"
        letterSpacing="wide"
        textShadow="0 0 8px rgba(255, 255, 255, 0.8)"
        animation={`${fadeInUp} 1s ease-in-out`}
        color="gray.400"
      >
        Aadarsha Sapkota
      </MotionHeading>

      <Stack
        direction={["column", "column", "row"]}
        mx="auto"
        spacing={8}
        mt={["5vw", "3vw", "2vw"]}
        w="90%"
        maxW="1200px"
        h="auto"
        justify="space-between"
        alignItems="center"
      >
        <MotionBox
          textAlign={["center", "left"]}
          flex={1}
          animation={`${fadeInUp} 1.5s ease-in-out`}
          mb={[6, 6, 0]}
        >
          <Text fontSize="xl" mb={2} fontWeight="bold" color="#1E3E62">
            BIOGRAPHY
          </Text>
          <Text fontSize={["md", "lg", "xl"]} color="gray.400" mb={8}>
            I am a passionate developer with a focus on building high-quality
            web applications.
          </Text>

          <Text fontSize="xl" mb={2} fontWeight="bold" color="#1E3E62">
            SKILLS
          </Text>
          <Text fontSize={["md", "lg", "xl"]} color="gray.400" mb={8}>
            Web Development • UI & UX Design • Marketing • SEO • Management
          </Text>

          <Text fontSize="xl" mb={2} fontWeight="bold" color="#1E3E62">
            CONNECT
          </Text>
          <Flex justifyContent={["center", "left"]} gap={4}>
            <Link href="https://www.facebook.com/aadarsha.sapkota.7" isExternal>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                size="lg"
                variant="outline"
                colorScheme="whiteAlpha"
              />
            </Link>
            <Link href="https://www.instagram.com/aadarsha22/" isExternal>
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                size="lg"
                variant="outline"
                colorScheme="whiteAlpha"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aadarsha-sapkota-100b28227/"
              isExternal
            >
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                size="lg"
                variant="outline"
                colorScheme="whiteAlpha"
              />
            </Link>
          </Flex>
        </MotionBox>

        <MotionImage
          src={AadarshaImage}
          alt="Aadarsha Sapkota"
          borderRadius="full"
          boxSize={["150px", "200px", "250px"]}
          objectFit="cover"
          border="4px solid"
          borderColor="gray.400"
          boxShadow="0px 0px 20px rgba(255, 255, 255, 0.3)"
          animation={`${zoomIn} 1.5s ease-in-out`}
        />

        <MotionBox
          textAlign={["center", "left"]}
          flex={1}
          animation={`${fadeInUp} 2s ease-in-out`}
          mb={[6, 6, 0]}
        >
          <Text fontSize="xl" mb={2} fontWeight="bold" color="#1E3E62">
            PROJECTS DONE
          </Text>
          <Text fontSize={["4xl", "3xl", "4xl"]} mb={8} color="gray.400">
            4
          </Text>

          <Text fontSize="xl" mb={2} fontWeight="bold" color="#1E3E62">
            YEARS OF EXPERIENCE
          </Text>
          <Text fontSize={["4xl", "3xl", "4xl"]} mb={8} color="gray.400">
            1+
          </Text>

          <Text fontSize="xl" mb={2} fontWeight="bold" color="#1E3E62">
            COMPANIES
          </Text>
          <Text fontSize={["4xl", "3xl", "4xl"]} color="gray.400">
            2
          </Text>
        </MotionBox>
      </Stack>
    </Box>
  );
};

export default Home;
