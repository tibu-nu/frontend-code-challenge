import Head from "next/head";
import "../styles/globals.css";
import dynamic from "next/dynamic";

const AppContainer = dynamic(() => import("../_/AppContainer"), { ssr: false });

function CodeChallengeApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Code Challenge App</title>
        <meta name="description" content="The tibu code challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
}

export default CodeChallengeApp;
