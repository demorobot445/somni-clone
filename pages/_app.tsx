import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";
import "swiper/css";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function App({ Component, pageProps }: AppProps) {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
