import '../styles/global.css'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Github from '../components/social'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className="flex w-full">
      <Header />
      <Github />
    </div> 
    <Component {...pageProps} />
    </>
  )
}
