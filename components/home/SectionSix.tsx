import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const SectionSix = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current!,
            scrub: true,
            end: "top top",
          },
        })
        .from(container.current, { opacity: 0 });

      // desktop setup code here...
      mm.add("(min-width: 800px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container.current!,
              start: "top top",
            },
            defaults: { duration: 1.5, ease: "power1.out" },
          })
          .from(".text", { opacity: 0, y: 100, stagger: 0.2 })
          .from(".images", { opacity: 0, yPercent: 50, stagger: 0.2 }, "<0.2");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: container.current!,
              pin: true,
              pinSpacing: true,
              end: () => `+=${innerHeight * 5}`,
              scrub: true,
            },
          })
          .to(container.current!, { xPercent: -100, x: "100vw" });
      });
    },
    { scope: container },
  );

  return (
    <div className="flex flex-col overflow-hidden bg-[#1E1512] text-white md:flex-row">
      <section
        ref={container}
        className="flex w-fit flex-col md:flex-row md:px-8"
      >
        <div className="flex w-screen flex-col gap-5 px-5 py-14 md:h-screen md:flex-row md:items-center md:gap-[5vw] md:px-0 md:pr-8">
          <Image
            className="images h-fit w-full object-cover md:w-[60vw]"
            src="/home/section-six/room-0.png"
            alt="room-img"
            width={1920}
            height={1080}
          />
          <div className="flex flex-col gap-4 md:w-[40vw]">
            <h1 className="text font-display block text-4xl md:text-[4vw] md:leading-none">
              A space for connection, for gathering, for bringing people
              together.
            </h1>
            <p className="text md:text-[1.5vw] md:leading-[130%]">
              Coffee has always been more than a drink — it is a ritual, a
              language, a shared moment. In Los Angeles, we honor that tradition
              in our own way.
            </p>
          </div>
        </div>
        <div className="flex w-screen flex-col gap-5 px-5 py-14 md:h-screen md:flex-row-reverse md:items-center md:gap-[5vw] md:px-0 md:pl-8">
          <Image
            className="images h-fit w-full object-cover md:w-[60vw]"
            src="/home/section-six/room-1.png"
            alt="room-img"
            width={1920}
            height={1080}
          />
          <div className="flex flex-col gap-4 md:w-[40vw]">
            <p className="text md:text-[1.5vw] md:leading-[130%]">
              Hala as a space to be… a place to gather, to connect, to belong.
            </p>
            <p className="text md:text-[1.5vw] md:leading-[130%]">
              Coffee has long carried meaning beyond the cup — a symbol of
              pause, presence, and community.
            </p>
            <p className="text md:text-[1.5vw] md:leading-[130%]">
              Here in Los Angeles, that spirit lives on.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionSix;
