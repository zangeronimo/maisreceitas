import React, { useState } from "react";
import { Router } from "next/router";
import { ThemeProvider } from "styled-components";
import Hooks from "@/hooks";
import GlobalStyles, { theme } from "@/styles/GlobalStyles";
import * as gtag from "../lib/gtag";

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Hooks>
        <GlobalStyles />
        <Component {...pageProps} />
      </Hooks>
    </ThemeProvider>
  );
}

export default MyApp;
