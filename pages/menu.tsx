import Head from "next/head";
import { useEffect } from "react";

const MenuPage = () => {
  useEffect(() => {
    window.location.href = "/menu.pdf";
  }, []);

  return (
    <>
      <Head>
        <title>Hala Coffee | Menu</title>
      </Head>
      <section className="flex h-screen w-full items-center justify-center bg-[#1C120F]">
        <h1 className="text-center text-4xl text-white">Menu Loading...</h1>
      </section>
    </>
  );
};

export default MenuPage;
