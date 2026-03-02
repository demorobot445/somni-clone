import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const HeroV2 = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current!,
            scrub: 0.5,
            start: "bottom bottom",
          },
        })
        .to(".text", { yPercent: 70 });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="relative h-screen w-full">
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src="/home/hero/bottom-layer.png"
        alt="background"
        width={1920}
        height={1080}
      />
      <Image
        className="text absolute top-[42%] left-1/2 z-10 w-[80%] -translate-x-1/2 object-cover md:top-[20%]"
        src="/home/hero/display-text.svg"
        alt="text"
        width={1920}
        height={1080}
      />
      <Image
        className="top-layer absolute inset-0 z-20 h-full w-full object-cover"
        src="/home/hero/top-layer.png"
        alt="background"
        width={1920}
        height={1080}
      />
    </section>
  );
};

export default HeroV2;
