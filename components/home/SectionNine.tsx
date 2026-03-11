import Image from "next/image";

const SectionNine = () => {
  return (
    <section className="grid h-screen w-screen grid-cols-4 gap-x-5 gap-y-14 bg-[#1C120F] px-8 md:grid-cols-12 md:gap-x-8 md:gap-y-0">
      <div className="col-span-3 col-start-4 flex flex-col gap-8 pt-20 text-white">
        <span className="text-2xl">(1)</span>

        <p>
          I grew up in a culture where hospitality is more than a gesture — it
          is a responsibility. Hosting someone meant care, pride, and attention
          to detail. It meant making people feel genuinely welcome, not just
          served.
        </p>

        <p>
          As I moved through different businesses and spaces, I began to notice
          something missing. Hospitality was present, but often only on the
          surface. The warmth was inconsistent, and the standards changed from
          place to place. I knew I wanted to show what real hospitality looks
          like — I just didn’t know where it belonged.
        </p>
      </div>
      <div className="col-span-4 col-start-9 flex flex-col gap-8 pt-20 text-white">
        <Image
          className="aspect-square h-70 scale-150 object-contain mix-blend-difference"
          src="/dotted-bird.png"
          alt="img"
          height={1024}
          width={1024}
        />
        <span className="text-2xl">(2)</span>

        <p>
          Then I realized something simple. Coffee is part of people’s everyday
          lives. It’s where mornings begin, where conversations happen, and
          where routines are built. If hospitality was going to be practiced
          consistently, it needed to live somewhere people return to every day.
        </p>

        <p>
          That realization became Hala. It began with a simple question: what
          does it truly mean to do something properly? eal hospitality looks
          like — I just didn’t know where it belonged.
        </p>
      </div>
    </section>
  );
};

export default SectionNine;
