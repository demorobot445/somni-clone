import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";

const SectionFive = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current!,
            pin: true,
            pinSpacing: true,
            scrub: true,
            end: () => `+=${innerHeight * 4}`,
          },
        })
        .to(".text-1", { yPercent: -200 })
        .to(".text-2", { yPercent: 200 }, "<")
        .to(".birds", { scale: 3 }, "<")
        .to(".birds", { filter: "blur(10px)", opacity: 0 }, "<0.2");
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="bg-off-white flex h-dvh w-screen flex-col items-center justify-between overflow-hidden p-7.5"
    >
      <p className="text-1 font-display text-center text-[5.3125rem] leading-none md:text-[11vw]">
        Location
      </p>
      <div className="birds flex items-center justify-center">
        <Image
          className="object-contain md:w-[10vw]"
          src="/home/section-five/birds.webp"
          alt="birds-img"
          width={1024}
          height={1024}
        />
        <Image
          className="-translate-y-[30%] object-contain md:w-[10vw]"
          src="/home/section-five/birds.webp"
          alt="birds-img"
          width={1024}
          height={1024}
        />
        <Image
          className="translate-y-[20%] object-contain md:w-[10vw]"
          src="/home/section-five/birds.webp"
          alt="birds-img"
          width={1024}
          height={1024}
        />
        <Image
          className="object-contain md:w-[10vw]"
          src="/home/section-five/birds.webp"
          alt="birds-img"
          width={1024}
          height={1024}
        />
      </div>
      <p className="text-2 font-display -scale-100 text-center text-[5.3125rem] leading-none md:text-[11vw]">
        Location
      </p>
    </section>
  );
};

export default SectionFive;
