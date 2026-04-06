import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const HeroV2 = () => {
  const container = useRef<HTMLElement>(null);
  // const { isLoader } = useSnapshot(store);

  useGSAP(
    () => {
      gsap.set(".text-image", { yPercent: 70, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current!,
            scrub: 0.5,
            start: "bottom bottom",
          },
        })
        .to(".text", { yPercent: 70 });

      gsap
        .timeline({ defaults: { duration: 2, ease: "power1.out", delay: 0.5 } })
        .to(".text-image", { yPercent: 0, opacity: 1 });
    },
    { scope: container },
  );

  // useGSAP(
  //   () => {
  //     if (!isLoader) {
  //       gsap
  //         .timeline({ defaults: { duration: 2, ease: "power1.out" } })
  //         .to(".text-image", { yPercent: 0, opacity: 1 });
  //     }
  //   },
  //   { scope: container, dependencies: [isLoader] },
  // );

  return (
    <section ref={container} className="relative h-screen w-full">
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src="/home/hero/bottom-layer.png"
        alt="background"
        width={1920}
        height={1080}
      />
      <div className="text absolute top-[42%] left-1/2 z-10 w-[80%] -translate-x-1/2 object-cover md:top-[20%]">
        <Image
          className="text-image"
          src="/home/hero/display-text.svg"
          alt="text"
          width={1920}
          height={1080}
        />
      </div>
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
