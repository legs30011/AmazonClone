import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/styles/globalstyles";
import Header from "@/components/Header";

export const theme: DefaultTheme = {
  colors: {
    black: "#111",
    background:"#EAEDED",
    white:"#ffffff",
    navBg:"#131921",
    orange: "#ee8f0b"
    },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header></Header>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
