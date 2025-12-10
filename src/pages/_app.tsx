import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { LoadingContentProvider, useLoading } from "../contexts/LoadingContentContext";
import "../styles/global.css";
import Social from "../components/social";

function AppContent({ Component, pageProps }: AppProps) {
  const { isLoading } = useLoading()
  return (
    <>
      <Head>
        <title>Pedro Foradori</title>
      </Head>

      {/* {isLoading && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-4">
          <div className="border-4 border-gray-700 border-t-green-500 rounded-full w-12 h-12 animate-spin"></div>
          <p className="text-white text-sm tracking-widest font-jost">
            CARREGANDO...
          </p>
        </div>
      )}

      <div className={`flex w-full px-4 justify-end max-sm:px-0`}>
        <Social />
      </div> */}

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
