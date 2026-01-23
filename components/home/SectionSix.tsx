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
    <div className="bg-off-white flex flex-col md:flex-row">
      <section
        ref={container}
        className="flex w-fit flex-col md:flex-row md:px-8"
      >
        <div className="grid w-full grid-cols-4 gap-x-8 px-5 py-28 md:h-dvh md:w-screen md:grid-cols-12 md:px-0">
          <div className="order-2 col-span-4 md:order-1 md:col-span-5 md:col-start-7">
            <p className="pb-8 text-3xl md:text-[2.3vw] md:leading-[100%]">
              Somni, a home for a pleasure dream.
            </p>
          </div>
          <Image
            className="order-1 col-span-3 object-contain pb-14 md:order-2 md:col-span-4 md:col-start-2 md:pb-0"
            src="/home/section-six/0.webp"
            alt="img"
            width={1366}
            height={689}
          />
          <div className="order-3 col-span-4 flex flex-col md:col-span-3 md:col-start-7">
            <p className="md:text-[1.094vw] md:leading-[150%]">
              (01)
              <br />
              Somni* tells the story of a Spaniard in America, embracing the
              vibrant new surroundings, while spotlighting his Basque and
              Catalan roots. Its setting is a tiny territory at the edge of West
              Hollywood, devoted to virtuous hedonistic pleasure and creative
              culture.
              <br />
              On a visit to the chef's home, the tale starts to unfold. A serene
              space where the raw materials nod towards earlier chapters in the
              Bay of Biscay and the Mediterranean. A fountain harkens to the
              sculptor Eduardo Chillida, while panot tiles speak of Gaudí and
              the streets of Barcelona.
            </p>
            <hr className="my-4" />
            <p className="md:text-[1.094vw] md:leading-[150%]">
              * Somni means dream in Catalan, the language of Catalonia and
              Barcelona in Spain.
            </p>
          </div>
          <div className="order-4 col-span-4 flex flex-col md:col-span-3">
            <p className="md:text-[1.094vw] md:leading-[150%]">
              (02)
              <br />
              The space is meticulously designed to offer an oasis of comfort, a
              feeling of home even in a place that might be physically far away.
              Far from clamor, with warm and friendly lights, noble materials,
              wood, stone, crafted with ancient craftsmanship, every detail has
              been studied in coherence with the goal of harmony and well-being,
              of becoming more relaxed in these surroundings, as distant and
              dazzling as they may initially seem.
            </p>
            <p className="md:text-[1.094vw] md:leading-[150%]">
              (03)
              <br />
              The entrance, a sculptural wink, encourages your mind to wander.
              Rather than an imposing design, the rooms embrace us with warmth
              and comfort. The patio-terrace expands this micro-domestic
              universe towards nature, and everywhere, the presence of art, as a
              symbol of the greatest human skill, asks us to strive towards a
              dream that’s far vaster and wilder than what we ever could have
              imagined.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-x-8 px-5 pb-14 md:h-dvh md:w-[50vw] md:grid-cols-6 md:px-0 md:py-28">
          <Image
            className="col-span-4 aspect-3/2 object-cover md:col-start-2"
            src="/home/section-six/1.webp"
            alt="img"
            width={1366}
            height={689}
          />
        </div>
        <div className="bg-light-gray relative flex w-fit flex-col px-5 md:flex-row md:px-0">
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-15"
            src="/home/section-six/background.png"
            alt="background"
            width={1920}
            height={1080}
          />

          <div className="relative grid grid-cols-4 gap-x-8 pt-10 pb-14 md:h-dvh md:w-screen md:grid-cols-12 md:py-28">
            <div className="col-span-4 md:col-span-7 md:col-start-2">
              <h2 className="font-display pb-10 text-center text-5xl md:pb-0 md:text-left md:text-[10.6vw] md:leading-none">
                Experiences
              </h2>
            </div>
            <div className="col-span-3 col-start-2 flex flex-col md:col-start-5">
              <Image
                className="w-[70%]"
                src="/home/section-six/2.webp"
                alt="img"
                width={1366}
                height={689}
              />
              <Image
                className="-mt-[10%] ml-auto w-[70%]"
                src="/home/section-six/3.jpg"
                alt="img"
                width={1366}
                height={689}
              />
            </div>
          </div>

          <div className="relative grid grid-cols-4 gap-x-8 pb-14 md:h-dvh md:w-[80vw] md:grid-cols-9 md:py-28">
            <div className="col-span-3 pb-10 md:col-span-4 md:pb-0">
              <Image
                className="w-full object-contain"
                src="/home/section-six/4.webp"
                alt="img"
                width={1366}
                height={689}
              />
            </div>
            <div className="col-span-4 flex flex-col gap-8 md:col-span-3 md:col-start-6">
              <h4 className="text-2xl md:text-[1.875vw] md:leading-[120%]">
                Chef's Counter Experience
              </h4>
              <p className="md:text-[1.094vw] md:leading-[150%]">
                Dinner at our 14-seat communal Chef’s Counter offers a personal
                and immersive experience.
                <br />
                The wooden counter allows a front-row look into the craft and
                hospitality of Chef Aitor and his team.
                <br />
                The seating starts with a few bites in our patio (weather
                dependent) before proceeding with your meal in the dining room.
                <br />
                Currently, Somni offers one seating at 7:30pm and reservations
                can only be made via our website or OpenTable.
                <br />
                Kindly note that, at this time, Somni is unable to accommodate
                allergies and dietary restrictions
              </p>
            </div>
          </div>

          <div className="relative grid grid-cols-4 gap-x-8 pb-14 md:h-dvh md:w-[80vw] md:grid-cols-9 md:py-28">
            <div className="col-span-3 pb-10 md:col-span-4 md:pb-0">
              <Image
                className="w-full object-contain"
                src="/home/section-six/5.webp"
                alt="img"
                width={1366}
                height={689}
              />
            </div>
            <div className="col-span-4 flex flex-col gap-8 md:col-span-3 md:col-start-6">
              <h4 className="text-2xl md:text-[1.875vw] md:leading-[120%]">
                Private Cellar Experience
              </h4>
              <p className="md:text-[1.094vw] md:leading-[150%]">
                The Cellar Experience takes place in our wine-cellar adjacent
                private dining room. With a prime view of Somni’s cellar, this
                exclusive experience focuses on privacy while enjoying the
                iconic Somni menu.
                <br />
                Your experience will start in our patio with a few light snacks
                (weather dependent) before continuing in the private room. The
                room is yours for the night.
                <br />
                The seating for the Cellar Experience starts at 5:30pm.
                <br />
                Bookings for the private room can be made via our website or
                OpenTable.
                <br />
                Kindly note that, at this time, Somni is unable to accommodate
                allergies and dietary restrictions.
              </p>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-4 gap-x-8 bg-white px-5 pt-10 pb-14 md:h-dvh md:w-screen md:grid-cols-12 md:px-0 md:py-28">
          <div className="font-display relative col-span-4 text-[5.3125rem] leading-[100%] md:col-span-5 md:col-start-2 md:text-[13vw] md:leading-none">
            Team
          </div>
          <div className="font-display col-span-4 col-start-2 text-[5.3125rem] leading-[100%] md:col-span-5 md:col-start-6 md:text-[13vw] md:leading-none">
            Team
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionSix;
