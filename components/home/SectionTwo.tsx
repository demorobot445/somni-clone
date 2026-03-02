import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const SectionTwo = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const breakPoint = 768;

      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
        },
        (context) => {
          let { isMobile } = context.conditions as { isMobile: boolean };

          gsap.set(".main-heading", {
            scale: isMobile ? 1 : 1.5,
            yPercent: isMobile ? 0 : -70,
            y: isMobile ? "-70vh" : 0,
          });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: container.current!,
                scrub: true,
                start: "top top",
                end: () => (isMobile ? "bottom bottom" : "70% bottom"),
              },
            })
            .to(".main-heading", {
              scale: isMobile ? 0.75 : 1,
              yPercent: 0,
              y: 0,
            });
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="text-light-gray relative overflow-x-clip bg-[#1C120F] pt-[17.5dvh] md:pt-[33.33dvh]"
    >
      <div className="text-primary-title relative px-5 text-center md:px-8">
        <div className="relative isolate mx-auto flex h-screen items-end">
          <h1 className="main-heading font-display w-full text-center text-[5.25rem] leading-[100%] md:text-[13.5vw] md:leading-none">
            Tot
            <br />
            Comença
          </h1>
        </div>
        <Image
          className="mx-auto size-48 md:size-[28vw] md:scale-125"
          src="/home/section-two/flower.png"
          width={1024}
          height={1024}
          alt="flower-img"
        />
        <h1 className="font-display w-full scale-75 text-center text-[5.25rem] leading-[100%] md:scale-100 md:text-[13.5vw] md:leading-none">
          Amb Un Somni
        </h1>
        <div className="pt-28 pb-14 md:px-8 md:py-40">
          <div className="grid grid-cols-4 gap-x-5 md:grid-cols-12 md:gap-x-8">
            <div className="col-span-4 md:col-span-6 md:col-end-13">
              <p className="text-left text-[1.75rem] leading-[130%] md:pr-20 md:text-center md:text-4xl">
                " Everything starts with a dream..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
