import "../styles/global.css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Github from "../components/social";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pedro Foradori</title>
      </Head>
      <div className="flex w-full px-4 max-sm:px-0">
        <Header />
        <Github />
      </div>
      <Component {...pageProps} />
    </>
  );
}
