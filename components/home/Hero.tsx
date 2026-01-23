import Link from "next/link";
import { Flower, Logo } from "../common/Icons";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Hero = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current!,
            scrub: true,
            start: "top top",
            end: "bottom top",
          },
        })
        .to(".logo", { scale: 1.85 })
        .to(".scroll-down-guide", { rotate: -75 }, "<");
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="px-5 relative md:px-8 flex h-[88dvh] min-h-150 flex-col items-stretch justify-center overflow-x-clip"
    >
      <div className="grid grid-cols-4 md:grid-cols-12 gap-x-5 md:gap-x-8 px-7 md:px-14">
        <div className="logo col-span-4 origin-bottom md:col-span-8 md:col-start-3">
          <Logo />
        </div>
      </div>
      <div className="grid place-items-center py-14">
        <Link
          href="#"
          target="_blank"
          aria-label="Make a reservation (opens in a new tab)"
          className="px-3 py-1.25 md:px-4 md:py-[0.34375rem] border text-body-text bg-accent text-white rounded-full hover:bg-off-white hover:text-accent border-accent"
        >
          Make a reservation
        </Link>
      </div>
      <div className="flex h-0 translate-y-8 items-end justify-center gap-4 md:translate-y-11">
        {[...Array(3)].map((elem, index) => {
          return (
            <div key={index} className="size-8 md:size-11 text-accent">
              <Flower />
            </div>
          );
        })}
      </div>
      {/* background image */}
      <Image
        className="select-none w-full h-[110vh] pointer-events-none absolute inset-0 object-cover object-top"
        src="/home/hero/background.png"
        alt="background-img"
        width={1920}
        height={1080}
      />
      {/* scroll down guide */}
      <div className="px-5 md:px-8 absolute bottom-5 right-0 z-10 grid place-items-end md:bottom-12">
        <Link
          href="#"
          className="scroll-down-guide grid size-24 place-items-center rounded-full bg-light-gray p-3 text-center text-soft-black selection:bg-soft-black selection:text-light-gray"
        >
          Scroll to discover
        </Link>
      </div>
    </section>
  );
};

export default Hero;
