import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PlayerLayout from "../components/playerLayout";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  );
}
