import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Effy Coding Assignment</title>
        <meta name="description" content="Effy Coding Assignment" />
        {/* <link rel="icon" href="/tablogo.svg" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
