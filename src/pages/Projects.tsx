import { Box, Heading, Text } from "@chakra-ui/react";
import { Project } from "../types/project";

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Built using React and Chakra UI",
    technologies: ["React", " Chakra UI"],
    githubLink: "https://github.com/",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "An online store with full shopping experience",
    technologies: ["React", " Redux"],
    githubLink: "https://github.com/",
  },
];

const Projects = () => {
  return (
    <Box
      textAlign="center"
      bg="black"
      py={10}
      px={6}
      minHeight="90vh"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Heading as="h1" size="xl" mb={4} textAlign="center" color={"gray.400"}>
        My Projects
      </Heading>
      {projects.map((project) => (
        <Box key={project.id} p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl" color={"gray.400"}>
            {project.title}
          </Heading>
          <Text color={"gray.400"} mt={4}>
            {project.description}
          </Text>
          <Text color={"gray.400"}>{project.technologies}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
