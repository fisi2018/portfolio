import { AppProps } from 'next/app'
import { LangProvider } from '../stateManagement/contexts/LangContext'
import { NavProvider } from '../stateManagement/contexts/NavContext'
import '../styles/global.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <Head>
        <title>Marco Fura - Portfolio</title>
      </Head>
      <NavProvider>
        <Component {...pageProps} />
      </NavProvider>
    </LangProvider>
  )
}
