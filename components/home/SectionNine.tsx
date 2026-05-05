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
          <p className="text">Hey brother can we change the story to this </p>

          <p className="text">It didn’t start as a business.</p>

          <p className="text">
            It started the way a lot of things do a group of friends sitting
            around, talking about what we could build. No real plan. No
            investors. Just the idea that we wanted to create something of our
            own.
          </p>

          <p className="text">
            At the time, it could’ve gone in a hundred different directions. But
            one thing kept coming back to us.
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
            className="images aspect-square h-50 scale-150 object-contain mix-blend-difference 2xl:h-[28%]"
            src="/dotted/bird.png"
            alt="img"
            height={1024}
            width={1024}
          />

          <p className="text">
            We come from a culture where hospitality isn’t a job. It’s how you
            live. You take care of people because it means something, not
            because it’s written in a job description.
          </p>

          <p className="text">
            That’s how we were raised. And once we started paying attention, we
            realized something was off.
          </p>

          <p className="text">
            We’d walk into places that looked right, good branding, good menus,
            everything in place, but something was missing. The warmth wasn’t
            consistent. The details were rushed. The care behind it just wasn’t
            there the way it should be.
          </p>
        </div>
      </div>
      <div className="grid w-screen grid-cols-4 gap-x-5 gap-y-14 bg-[#1C120F] px-5 md:-ml-px md:h-screen md:grid-cols-12 md:gap-x-8 md:gap-y-0 md:px-8">
        <div className="col-span-4 flex flex-col gap-8 pt-20 text-white md:col-start-3">
          <p className="text">
            So the idea changed. It stopped being about just starting a
            business, and became about fixing something we kept seeing
            everywhere.
          </p>

          <p className="text">
            The question was where. And the answer was simple.
          </p>

          <p className="text">Coffee.</p>

          <p className="text">
            It’s part of people’s everyday lives. It’s where mornings begin,
            where conversations happen, where routines are built. If you’re
            going to do hospitality properly, it has to live in those everyday
            moments not just once in a while.
          </p>

          <p className="text">That’s where Hala came from.</p>

          <Image
            className="images aspect-square h-50 scale-170 object-contain mix-blend-difference 2xl:h-[35%]"
            src="/dotted/horse.png"
            alt="img"
            height={1024}
            width={1024}
          />
        </div>
        <div className="col-span-4 flex flex-col justify-end gap-8 pt-20 pb-20 text-white md:col-start-8 md:pb-60">
          <p className="text">
            Not from a trend. Not from a concept deck.
            <br />
            From one decision to do something the right way.
            <br />
            No shortcuts. No half effort. No lowering the standard because it’s
            busy or because no one’s paying attention. Everything here is
            intentional. The ingredients. The process. The way we serve. The way
            we show up every day. Because people feel that, even if they can’t
            explain it.
          </p>
          <p className="text">
            Hala is built on consistency. You’ll know what to expect every time
            you walk in. And it’ll be right every time. That’s what we were
            raised on.
          </p>

          <p className="text">That’s what we built.</p>

          <p className="text">That is Hala.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionNine;
