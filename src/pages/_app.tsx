import '../styles/global.css'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
