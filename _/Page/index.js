import Head from "next/head";

function Page({ children, title, description }) {
  return (
    <>
      <Head>
        {title && <title>{title} - Code Challenge App</title>}
        {description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>
  );
}

export default Page;
