import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { AppProps } from "next/app";

const Website: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
