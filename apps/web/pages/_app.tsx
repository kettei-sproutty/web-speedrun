import CounterProvider from '../hooks/counter'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/main.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
  )
}

export default MyApp
