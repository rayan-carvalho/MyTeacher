import "styles/globals.css";
import type { AppProps } from "next/app";
import Cabecalho from "components/Cabecalho/Cabecalho";
import { ThemeProvider } from "@mui/material";
import tema from "themes/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Cabecalho />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
