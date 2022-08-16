import Head from "next/head";
import "../styles/globals.css";

function CodeChallengeApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Code Challenge App</title>
        <meta name="description" content="The tibu code challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CodeChallengeApp;
