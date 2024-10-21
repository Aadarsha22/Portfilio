import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Button,
  IconButton,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="gray.800" minWidth="100vw" px={4}>
      <Flex
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h={16}
        px={{ base: 4, md: 8 }}
      >
        <IconButton
          aria-label="Toggle Navigation"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          color="white"
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          bg="transparent"
          _hover={{ bg: "gray.700" }}
        />

        <HStack
          spacing={8}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Link to="/">
            <Button variant="ghost" color="white">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" color="white">
              About
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="ghost" color="white">
              Projects
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" color="white">
              Contact
            </Button>
          </Link>
        </HStack>

        <Collapse in={isOpen} animateOpacity>
          <Flex
            direction="column"
            position="absolute"
            top={16}
            right={0}
            bg="gray.800"
            w="full"
            zIndex={10}
            p={4}
            display={{ base: "flex", md: "none" }}
          >
            <Link to="/" onClick={onToggle}>
              <Button variant="ghost" color="white" w="100%" mb={2}>
                Home
              </Button>
            </Link>
            <Link to="/about" onClick={onToggle}>
              <Button variant="ghost" color="white" w="100%" mb={2}>
                About
              </Button>
            </Link>
            <Link to="/projects" onClick={onToggle}>
              <Button variant="ghost" color="white" w="100%" mb={2}>
                Projects
              </Button>
            </Link>
            <Link to="/contact" onClick={onToggle}>
              <Button variant="ghost" color="white" w="100%">
                Contact
              </Button>
            </Link>
          </Flex>
        </Collapse>
      </Flex>
    </Box>
  );
};

export default Header;
