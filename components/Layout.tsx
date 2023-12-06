// Import necessary modules
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react"; // Import ReactNode type

// Define the Main component with TypeScript
interface MainProps {
  children: ReactNode;
  router: any; // Adjust the type based on your needs
}

const Main: React.FC<MainProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Arga Melvern - Homepage</title>
      </Head>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
