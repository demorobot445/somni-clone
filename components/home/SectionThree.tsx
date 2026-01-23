import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef } from "react";

const SectionThree = () => {
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
              pin: true,
              pinSpacing: true,
              end: "+=3000",
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
      ref={container}
      className="bg-soft-black text-light-gray -mt-px flex w-fit flex-col md:h-dvh md:flex-row"
    >
      <div className="flex w-screen flex-col justify-between gap-14 p-7 md:gap-0">
        <div className="grid grid-cols-4 gap-x-8 gap-y-14 md:grid-cols-12 md:gap-y-0">
          <Image
            className="col-span-3 object-contain md:w-[22vw]"
            src="/home/section-three/0.webp"
            alt="img"
            width={1024}
            height={1024}
          />
          <p className="col-span-4 md:col-span-3 md:text-[1.094vw] md:leading-[150%]">
            (01)
            <br />I never realized how profound creativity could be until I
            encountered "El Bulli: El Sabor del Mediterráneo" in 1997. El Bulli
            and Ferran Adrià ignited a dream within me, showing that cooking
            could be an art form. This book, more than just recipes, revealed
            the essence of Mediterranean cuisine and inspired me to explore my
            creative potential. Since then, I've pursued a journey to blend
            storytelling with culinary expression, striving to share the magic
            of creativity with others.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-14 md:grid-cols-12 md:gap-y-0">
          <Image
            className="col-span-3 h-full object-cover md:col-start-4 md:w-[22vw]"
            src="/home/section-three/1.webp"
            alt="img"
            width={1024}
            height={1024}
          />
          <p className="col-span-4 md:text-[1.094vw] md:leading-[150%] 2xl:col-span-3">
            (02)
            <br />
            Somni opened in 2018 in Beverly Hills, achieving meteoric success.
            By the following year, it had earned two Michelin stars, placing our
            small space at the pinnacle of gastronomy. With a single table for
            ten diners, we made dreams come true and broke molds. Sadly, after
            two years, the pandemic forced us to pause the dream and close.
            Sometimes, magic emerges unexpectedly. We turned misfortune into an
            opportunity for transformation, realizing that an exciting period of
            reflection was beginning. Over the past three intense years, we
            reworked the concept of Somni, dreaming about the dream. This
            journey has been one of introspection, research, analysis, and
            creative experimentation—a continuous laboratory of reassessment,
            leading to a renewed and elevated version of our project.
          </p>
        </div>
      </div>
      <div className="flex w-screen flex-col items-center justify-center gap-y-14 p-7 pb-40 md:h-dvh md:flex-row md:gap-y-0 md:pb-0">
        <div className="flex h-full w-fit items-center justify-center">
          <Image
            className="md:w-[28vw] md:object-contain"
            src="/home/section-three/2.webp"
            alt="img"
            width={1024}
            height={1024}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-8 md:w-1/2 md:grid-cols-6 md:gap-y-16">
          <p className="col-span-4 md:col-span-3 md:col-start-2 md:text-[1.094vw] md:leading-[150%]">
            (03)
            <br />
            Here, you are entering a world entirely of our own creation. Let
            down the guard to your imagination. The lines are all blurred. Cooks
            are servers and servers are cooks. The boundaries between diner and
            chef have disappeared. The experience begins even before you sit
            down and lingers long after you’ve left. We all might enter
            separately but gradually we all come together.
          </p>
          <p className="col-span-4 md:col-span-3 md:col-start-3 md:text-[1.094vw] md:leading-[150%]">
            (04) The new Somni is an interpretation of culinary freedom in a way
            that only Los Angeles could inspire, while not losing a sense of
            where we came from. A selection of the finest products, each a story
            unto their own, handled with the utmost skill. It’s a dream that
            conveys all of the love and challenges of the past, while opening a
            doorway to a vision of a hopeful future, where we are all a part of
            the same family. Benvingut, ongi etorria, welcome!
          </p>
        </div>
      </div>
      <div className="text-soft-black relative flex h-dvh w-screen items-center justify-center bg-white">
        <div className="absolute -bottom-0.5 left-0 z-10 h-1 w-full bg-white" />

        <div className="w-full px-5 md:px-8">
          <div className="relative flex w-40 items-end pb-8 md:hidden">
            <Image
              className="-translate-x-1/2 object-cover"
              src="/home/dishes/2.webp"
              alt="dish-img"
              width={1366}
              height={689}
            />
          </div>
          <div className="relative grid grid-cols-4 gap-x-5 md:grid-cols-12 md:gap-x-8 md:gap-y-12">
            <div className="font-display relative col-span-4 text-[5.3125rem] leading-[100%] md:col-span-5 md:col-start-2 md:text-[13vw] md:leading-none">
              Gallery
            </div>
            <div className="relative col-span-2 col-start-8 flex items-end max-md:hidden">
              <Image
                className="w-[70%] object-cover"
                src="/home/dishes/0.webp"
                alt="dish-img"
                width={1366}
                height={689}
              />
            </div>
            <div className="relative col-span-2 col-start-3 max-md:hidden">
              <Image
                className="object-cover"
                src="/home/dishes/1.webp"
                alt="dish-img"
                width={1366}
                height={689}
              />
            </div>
            <div className="font-display col-span-4 col-start-2 text-[5.3125rem] leading-[100%] md:col-span-5 md:col-start-6 md:text-[13vw] md:leading-none">
              Gallery
            </div>
            <div className="relative max-md:hidden">
              <Image
                className="translate-1/2 scale-[225%] object-cover"
                src="/home/dishes/2.webp"
                alt="dish-img"
                width={1366}
                height={689}
              />
            </div>
          </div>
          <div className="relative flex items-end justify-end pt-8 md:hidden">
            <Image
              className="w-61.5 object-cover"
              src="/home/dishes/1.webp"
              alt="dish-img"
              width={1366}
              height={689}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
