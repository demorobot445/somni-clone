import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const SectionNine = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // desktop setup code here...
      mm.add("(min-width: 800px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container.current!,
              start: "top +=10%",
            },
            defaults: { duration: 1.5, ease: "power1.out" },
          })
          .from(".text", { opacity: 0, yPercent: 50, stagger: 0.2 })
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
    <section
      id="story"
      ref={container}
      className="flex w-fit flex-col md:flex-row"
    >
      <div className="grid grid-cols-4 gap-x-5 gap-y-14 bg-[#1C120F] px-5 md:h-screen md:w-screen md:grid-cols-12 md:gap-x-8 md:gap-y-0 md:px-8">
        <div className="col-span-4 flex flex-col gap-8 pt-20 text-white md:col-span-5 md:col-start-2 2xl:col-span-3 2xl:col-start-4">
          <span className="text text-2xl">(1)</span>
          <p className="text">
            I grew up in a culture where hospitality is more than a gesture — it
            is a responsibility. Hosting someone meant care, pride, and
            attention to detail. It meant making people feel genuinely welcome,
            not just served.
          </p>

          <p className="text">
            As I moved through different businesses and spaces, I began to
            notice something missing. Hospitality was present, but often only on
            the surface. The warmth was inconsistent, and the standards changed
            from place to place. I knew I wanted to show what real hospitality
            looks like — I just didn’t know where it belonged.
          </p>
          <Image
            className="images aspect-square h-55 object-contain mix-blend-difference 2xl:h-[35%]"
            src="/dotted/coffee.png"
            alt="img"
            height={1024}
            width={1024}
          />
        </div>
        <div className="col-span-4 flex flex-col gap-8 py-20 text-white md:col-span-5 md:col-start-8 2xl:col-span-4 2xl:col-start-9 2xl:pt-40">
          <Image
            className="images aspect-square h-50 scale-150 object-contain mix-blend-difference 2xl:h-[35%]"
            src="/dotted/bird.png"
            alt="img"
            height={1024}
            width={1024}
          />
          <span className="text text-2xl">(2)</span>

          <p className="text">
            Then I realized something simple. Coffee is part of people’s
            everyday lives. It’s where mornings begin, where conversations
            happen, and where routines are built. If hospitality was going to be
            practiced consistently, it needed to live somewhere people return to
            every day.
          </p>

          <p className="text">
            That realization became Hala. It began with a simple question: what
            does it truly mean to do something properly? eal hospitality looks
            like — I just didn’t know where it belonged.
          </p>
        </div>
      </div>
      <div className="grid w-screen grid-cols-4 gap-x-5 gap-y-14 bg-[#1C120F] px-5 md:-ml-px md:h-screen md:grid-cols-12 md:gap-x-8 md:gap-y-0 md:px-8">
        <div className="col-span-4 flex flex-col gap-8 pt-20 text-white md:col-start-3">
          <span className="text text-2xl">(3)</span>

          <p className="text">
            Before Hala was a space, it was a decision — a decision to build
            something the right way. In a world that moves fast, where details
            are rushed and standards are lowered, we chose to slow down and
            focus on doing things properly. No shortcuts, no half effort, and no
            compromise.
          </p>

          <p className="text">
            Hala was built on the belief that standards still matter. Every
            detail is intentional — from the ingredients we choose, to the way
            each drink is prepared, to how we welcome every person who walks
            through the door.
          </p>
          <Image
            className="images aspect-square h-50 scale-170 object-contain mix-blend-difference 2xl:h-[35%]"
            src="/dotted/horse.png"
            alt="img"
            height={1024}
            width={1024}
          />
        </div>
        <div className="col-span-4 flex flex-col justify-end gap-8 pt-20 pb-20 text-white md:col-start-8 md:pb-30">
          <span className="text text-2xl">(4)</span>
          <p className="text">
            Strength, like the horse in our mark. Kindness in the way we welcome
            you. Craft in every drink we serve. Culture in the details that
            shape this space.
          </p>

          <p className="text">
            Hala was created to be consistent — a place where the standard does
            not change, and where you know what to expect every time you walk
            in.
          </p>
          <p className="text">
            Because here, we do more than serve drinks. We serve an experience.
            And the standard is what we stand for.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionNine;
