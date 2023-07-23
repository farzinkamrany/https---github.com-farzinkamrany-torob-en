import { createGlobalStyle } from "styled-components";

import localFont from 'next/font/local'
import { AppProps } from "next/app";
const myFont = localFont({ src: '../assets/fonts/IRANN.ttf' })
const GlobalStyle = createGlobalStyle`
    @font-face {
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
`;

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <main  className={myFont.className}>
      {/* <GlobalStyle />
      <Component {...pageProps} /> */}
    </main>
  );
}

export default MyApp