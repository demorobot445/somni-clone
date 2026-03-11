import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const SectionSix = () => {
  // const container = useRef<HTMLElement>(null);

  // useGSAP(
  //   () => {
  //     const mm = gsap.matchMedia();

  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: container.current!,
  //           scrub: true,
  //           end: "top top",
  //         },
  //       })
  //       .from(container.current, { opacity: 0 });

  //     // desktop setup code here...
  //     mm.add("(min-width: 800px)", () => {
  //       gsap
  //         .timeline({
  //           scrollTrigger: {
  //             trigger: container.current!,
  //             pin: true,
  //             pinSpacing: true,
  //             end: () => `+=${innerHeight * 5}`,
  //             scrub: true,
  //           },
  //         })
  //         .to(container.current!, { xPercent: -100, x: "100vw" });
  //     });
  //   },
  //   { scope: container },
  // );

  return (
    <div className="flex flex-col bg-[#070707] text-white md:flex-row">
      <section className="flex w-fit flex-col">
        <div className="flex h-screen w-screen flex-col items-center px-5 py-14 md:flex-row md:gap-40 md:px-0 md:pr-8">
          <Image
            className="h-fit w-full object-cover md:mt-auto md:w-[50vw]"
            src="/home/section-six/room-0.png"
            alt="room-img"
            width={1920}
            height={1080}
          />
          <div className="flex max-w-125 flex-col gap-4 md:w-[30vw]">
            <h1 className="font-display block text-4xl md:text-[2.5rem] md:leading-[120%]">
              A space for connection, gathering, and Building Memories
            </h1>
            <p>
              A space for connection, for gathering, for bringing people
              together.
            </p>
            <p>
              Since the fifteenth century, when roasted beans were first poured
              in Yemen, it carried more than energy. it carried meaning. In Los
              Angeles, we carry this heritage forward.
            </p>
            <p className="italic opacity-50">Hala LA, Fulton SF</p>
          </div>
        </div>
        <div className="flex h-screen w-screen flex-col items-center justify-start px-5 py-14 md:flex-row-reverse md:gap-40">
          <Image
            className="h-fit w-full object-cover md:w-[50vw]"
            src="/home/section-six/room-1.png"
            alt="room-img"
            width={1920}
            height={1080}
          />
          <div className="flex max-w-125 flex-col gap-4 md:w-[40vw]">
            <h1 className="font-display block text-4xl md:text-[2.5rem] md:leading-[120%]">
              Gathering, and Building Memories
            </h1>
            <p>
              A space for connection, for gathering, for bringing people
              together.
            </p>
            <p>
              Since the fifteenth century, when roasted beans were first poured
              in Yemen, it carried more than energy. it carried meaning. In Los
              Angeles, we carry this heritage forward.
            </p>
            <p className="italic opacity-50">Hala LA, Fulton SF</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionSix;
