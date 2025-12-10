import { Html, Head, Main, NextScript, } from "next/document";
import BackgroundMedia from "../components/backgroundMedia";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap" rel="stylesheet"></link>
                <meta name="google-site-verification" content="W0WmtRA-gm0pS7uMe-7rwmipfegkYjBHHYCdd0BuwOk" />
                <link rel="shortcut icon" href="/assets/beer.ico" />
            </Head>
            <body className="bg-app h-screen bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden bg-black">
                {/* <video preload="metadata" autoPlay muted loop className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none">
                    <source src="/assets/bg_video.mp4" type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video> */}
                <BackgroundMedia
                    videoSrc="/assets/bg_video.mp4"
                    poster="/assets/bg.jpg"
                    mobileImage="/assets/bg.jpg"
                />
                <div className="relative z-10">
                    <Main />
                    <NextScript />
                </div>
            </body>
        </Html>
    )
}