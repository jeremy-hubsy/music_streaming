import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PlayerLayout from "../components/playerLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerLayout>
      <Component {...pageProps} />
    </PlayerLayout>
  );
}
