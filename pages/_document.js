import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="beforeInteractive"
          src="https://cdn-cookieyes.com/client_data/8a7633c886a414c25fd3d202/script.js"
        />
      </body>
    </Html>
  );
}
