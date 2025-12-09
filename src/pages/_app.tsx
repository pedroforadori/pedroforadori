import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { LoadingContentProvider } from "../contexts/LoadingContentContext";
import "../styles/global.css";
import Social from "../components/social";

function AppContent({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Pedro Foradori - Desenvolvedor de Software, App e Sites"
        />
        <title>Pedro Foradori</title>
      </Head>
      <div className={`flex w-full px-4 justify-end max-sm:px-0`}>
        <Social />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default function App(props: AppProps) {
  return (
    <LoadingContentProvider>
      <AppContent {...props} />
    </LoadingContentProvider>
  );
}
