import { Html, Head, Main, NextScript, } from "next/document";

export default function Document() {

    function isMobileDevice() {
        if (typeof navigator === 'undefined' || typeof window === 'undefined') return false;
        const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
        const uaMobile = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(ua);
        const hasTouch = 'ontouchstart' in window || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
        const smallScreen = window.innerWidth <= 768;

        console.log(uaMobile || hasTouch || smallScreen)
        return uaMobile || hasTouch || smallScreen;
    }

    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap" rel="stylesheet"></link>
                <meta name="google-site-verification" content="W0WmtRA-gm0pS7uMe-7rwmipfegkYjBHHYCdd0BuwOk" />
                <link rel="shortcut icon" href="/assets/beer.ico" />
            </Head>

            <body className="bg-app h-screen bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden bg-black 
                             max-sm:bg-app-mobile">
                {!isMobileDevice() && (
                    <video preload="metadata" autoPlay muted loop className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none">
                        <source src="/assets/bg_video.mp4" type="video/mp4" />
                        <track
                            src="/path/to/captions.vtt"
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                        />
                        Your browser does not support the video tag.
                    </video>
                )}

                <div className="relative z-10">
                    <Main />
                    <NextScript />
                </div>
            </body>
        </Html>
    )
}