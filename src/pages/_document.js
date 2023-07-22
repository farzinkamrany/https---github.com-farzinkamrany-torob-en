import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head><link href="https://fonts.cdnfonts.com/css/iranyekan" rel="stylesheet"
        />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            /* Other global styles such as 'html, body' etc... */

            #__next {
              height: 100%;
              display:flex;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}