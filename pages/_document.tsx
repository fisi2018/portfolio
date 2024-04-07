import { Html, Main, NextScript, Head } from 'next/document'
export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
