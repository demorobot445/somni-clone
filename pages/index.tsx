import Hero from "@/components/home/Hero";
import SectionFive from "@/components/home/SectionFive";
import SectionFour from "@/components/home/SectionFour";
import SectionSeven from "@/components/home/SectionSeven";
import SectionSix from "@/components/home/SectionSix";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Somni Clone</title>
      </Head>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </>
  );
}
