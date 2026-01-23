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
      className="relative overflow-x-clip rounded-t-full bg-soft-black pt-[17.5dvh] text-light-gray md:pt-[33.33dvh]"
    >
      <div className="px-5 md:px-8 text-primary-title relative text-center">
        <div className="relative isolate mx-auto flex items-end h-screen">
          <h1 className="main-heading font-display text-[5.25rem] leading-[100%] w-full md:text-[13.5vw] text-center md:leading-none">
            Tot
            <br />
            Comença
          </h1>
        </div>
        <Image
          className="size-48 md:size-[28vw] mx-auto md:scale-125"
          src="/home/section-two/flower.png"
          width={1024}
          height={1024}
          alt="flower-img"
        />
        <h1 className="font-display w-full text-[5.25rem] leading-[100%] scale-75 md:scale-100 md:text-[13.5vw] text-center md:leading-none">
          Amb Un Somni
        </h1>
        <div className="md:px-8 pb-14 pt-28 md:py-40">
          <div className="grid grid-cols-4 md:grid-cols-12 gap-x-5 md:gap-x-8">
            <div className="col-span-4 md:col-span-6 md:col-end-13">
              <p className="text-[1.75rem] leading-[130%] text-left md:text-center md:text-4xl  md:pr-20">
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
