import Link from "next/link";
import { Container, Box, Heading } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
        Hello, I'm a Front-end developer based in Indonesia!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Arga Melvern
          </Heading>
          <p>(AI Engineer / Front-End Developer / UI/UX Designer)</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
