import Head from "next/head";
import { Sora } from "@next/font/google";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import LangProvider from "../context/LangContext";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <LangProvider>
      <div
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Daler Khusainov | Developer</title>
        </Head>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div>
    </LangProvider>
  );
};

export default Layout;
