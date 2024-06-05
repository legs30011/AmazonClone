import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/styles/globalstyles";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header></Header>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
    </>
  );
}
