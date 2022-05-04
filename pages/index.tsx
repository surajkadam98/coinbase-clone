import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import Fold1 from "../components/Fold1.jsx";
import Fold2 from "../components/Fold2.jsx";
import Fold3 from "../components/Fold3.jsx";
import Fold4 from "../components/Fold4.jsx";
import Fold5 from "../components/Fold5.jsx";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="w-screen overflow-hidden text-gray-900">
      <Head>
        <title>Coinbase Clone - Buy & Sell Cryptocurrency</title>
        <meta name="description" content="Web development practice | React.js, Next.js, Tailwind CSS" />
        <meta
          property="og:title"
          content="Coinbase Clone - Buy & Sell Cryptocurrency"
        />
        <meta
          property="og:description"
          content="Web development practice | React.js, Next.js, Tailwind CSS"
        />
        <meta
          property="og:image"
          content="https://logo.clearbit.com/coinbase.com"
        />
        <link rel="icon" href="https://logo.clearbit.com/coinbase.com" />
      </Head>

      <div className="mx-auto w-screen overflow-x-hidden">
        <Nav />
        <Fold1 />
        <Fold2 />
        <Fold3 />
        <Fold4 />
        <Fold5 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
