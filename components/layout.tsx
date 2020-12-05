import { Container } from "react-bootstrap";
import Head from "next/head";
import Navbar from "./navbar/navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Hestia</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com"> */}
        <link href="https://fonts.googleapis.com/css2?family=Antic+Didone&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      {children}
    </>
  );
}

export default Layout;