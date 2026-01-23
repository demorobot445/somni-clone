import Image from "next/image";

const SectionSeven = () => {
  return (
    <section className="relative flex flex-col">
      <div className="relative px-5 pt-14 pb-40 md:px-8">
        <div className="grid grid-cols-4 gap-x-5 md:grid-cols-12 md:gap-x-8">
          <p className="col-span-4 text-[1.6875rem] leading-[140%] md:col-span-6 md:col-start-2 md:text-[2.344vw] md:leading-[120%]">
            "It is amazing what you can accomplish if you do not care who gets
            the credit." — Harry S. Truman
          </p>
        </div>
      </div>
      <div className="px-5 pb-24 md:px-8 md:pb-40">
        <div className="grid grid-cols-4 gap-x-5 max-md:gap-y-10 md:grid-cols-12 md:gap-x-8">
          <div className="col-span-4 md:col-span-6 md:col-start-2">
            <div className="grid grid-cols-4 gap-y-6 md:grid-cols-6 md:gap-y-10">
              <h5 className="col-span-4 space-y-2.5 md:col-span-6">
                <span className="block text-lg md:text-[1.042vw] md:leading-[150%]">
                  Chef/Owner
                </span>
                <span className="font-display block text-5xl md:text-[6.042vw] md:leading-none">
                  Aitor Zabala
                </span>
              </h5>
              <div className="col-span-4 md:col-span-3 md:col-start-4">
                <p className="group md:text-[1.094vw] md:leading-[150%]">
                  Chef Aitor Zabala stands as a resilient culinary maestro with
                  over 27 years of experience. Hailing from Barcelona, his
                  culinary journey spans the globe, from El Bulli to leading
                  roles at Think Food to venture into Somni 2.0. His commitment
                  to culinary excellence and determination to navigate setbacks
                  highlight his unwavering passion. Now, on the brink of
                  realizing Somni 2.0, Chef Aitor embodies the essence of a
                  visionary, blending creativity, perseverance, and an enduring
                  love for cooking that continues to inspire and uplift
                  <br className="group-last:hidden" />
                  <br className="group-last:hidden" />
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-1 col-span-4 overflow-hidden max-md:row-start-1 md:col-end-13">
            <Image
              className="w-full object-contain"
              src="/home/section-seven/person.webp"
              alt="person"
              width={1366}
              height={689}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
