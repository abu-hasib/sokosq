import Head from "next/head";
import { useProduct } from "../utils";
import Navbar from "./Navbar";

interface LayoutProps {
  title: string;
  totalCount?: number | undefined;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, totalCount, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Created by ridwan abiola" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar totalCount={totalCount} />
      <main className="h-screen">{children}</main>
    </>
  );
};

export default Layout;
