import Hero from "@/components/home/Hero";
import HeroV2 from "@/components/home/HeroV2";
import SectionEight from "@/components/home/SectionEight";
import SectionFive from "@/components/home/SectionFive";
import SectionFour from "@/components/home/SectionFour";
import SectionNine from "@/components/home/SectionNine";
import SectionSeven from "@/components/home/SectionSeven";
import SectionSix from "@/components/home/SectionSix";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hala Coffee</title>
      </Head>
      <HeroV2 />
      {/* <Hero /> */}
      <div className="mixer relative z-20 -my-[15vh] h-[30vh] w-full bg-linear-0 from-transparent via-[#1C120F] to-transparent" />
      <SectionNine />
      <SectionEight />
      {/* <SectionTwo /> */}
      <SectionThree />
      <SectionFour />
      <SectionSix />

      {/* <SectionFive /> */}
      {/* <SectionSeven /> */}
    </>
  );
}
