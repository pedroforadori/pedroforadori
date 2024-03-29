import { Html, Head, Main, NextScript, } from "next/document";

export default function Document () {
    return (
        <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap" rel="stylesheet"></link>
            <meta name="google-site-verification" content="W0WmtRA-gm0pS7uMe-7rwmipfegkYjBHHYCdd0BuwOk" />
            <link rel="shortcut icon" href="/assets/beer.ico" />
        </Head>
        <body className="bg-app h-screen bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden">
            <Main />
            <NextScript />
        </body>
        </Html>
    )
    
}