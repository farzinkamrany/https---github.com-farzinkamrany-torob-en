import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head><link href="https://db.onlinewebfonts.com/c/50e9084d51fca72d0b7b32dc11e54eab?family=IRAN" rel="stylesheet" type="text/css"/>
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