import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PlayerLayout from "../components/playerLayout";
import { StoreProvider } from "easy-peasy";
import { store } from "../lib/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StoreProvider store={store}>
        {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <PlayerLayout>
            <Component {...pageProps} />
          </PlayerLayout>
        )}
      </StoreProvider>
    </>
  );
}
