import { Html, Main, NextScript, Head } from 'next/document'
export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" type="image/png" href="/assets/images/logos/MF.png" />
      </Head>
      <body className="dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
