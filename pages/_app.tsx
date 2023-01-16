import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PlayerLayout from "../components/playerLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {Component.authPage ? (
        <Component {...pageProps} />
      ) : (
        <PlayerLayout>
          <Component {...pageProps} />
        </PlayerLayout>
      )}
    </>
  );
}
