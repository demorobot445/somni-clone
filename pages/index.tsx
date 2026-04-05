import HeroV2 from "@/components/home/HeroV2";
import SectionEight from "@/components/home/SectionEight";
import SectionFour from "@/components/home/SectionFour";
import SectionNine from "@/components/home/SectionNine";
import SectionSix from "@/components/home/SectionSix";
import SectionThree from "@/components/home/SectionThree";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hala Coffee</title>
      </Head>
      <HeroV2 />
      <div className="mixer relative z-20 -my-[15vh] h-[30vh] w-full bg-linear-0 from-transparent via-[#1C120F] to-transparent" />
      <SectionNine />
      <SectionEight />
      <SectionThree />
      <SectionFour />
      <SectionSix />
    </>
  );
}
