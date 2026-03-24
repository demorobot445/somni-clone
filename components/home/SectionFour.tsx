import Image from "next/image";

const SectionFour = () => {
  return (
    <section className="relative h-480 bg-linear-0 from-[#7b6859] to-[#1C120F] px-5 md:h-560 md:px-8">
      {/* <Image
        className="pointer-events-none absolute inset-0 -z-1 h-full w-full object-cover"
        src="/home/section-three/menu-bg.png"
        alt="background-img"
        width={1920}
        height={1080}
      /> */}
      {/* Grid # 1 */}
      <div className="relative z-20 grid grid-cols-4 gap-x-5 pt-20 md:grid-cols-12 md:gap-x-8 md:pt-0 md:pb-52">
        <div
          data-speed="1.1"
          className="col-span-3 pr-10 md:col-span-3 md:col-start-3 md:pr-28"
        >
          <Image
            className="w-full object-cover"
            src="/gallery/0.png"
            alt="dish-img"
            width={1024}
            height={1024}
          />
        </div>
        <div
          data-speed="0.9"
          className="col-span-2 col-start-3 -translate-y-32 pl-5 md:col-span-2 md:col-start-9 md:-translate-y-20 md:pl-0"
        >
          <Image
            className="w-full object-cover"
            src="/gallery/1.png"
            alt="dish-img"
            width={1024}
            height={1024}
          />
        </div>
        {/* <div
          data-speed="1.1"
          className="col-span-1 col-start-12 hidden md:block"
        >
          <Image
            className="w-full object-cover"
            src="/home/dishes/5.webp"
            alt="dish-img"
            width={1024}
            height={1024}
          />
        </div> */}
      </div>
      {/* Grid # 2 */}
      <div className="grid grid-cols-4 gap-x-5 md:mb-40 md:grid-cols-12 md:gap-x-8">
        <div
          data-speed="0.8"
          className="col-span-3 col-start-1 pt-28 pr-10 md:col-span-3 md:col-start-6 md:pt-0 md:pr-0"
        >
          <Image
            className="w-full object-cover"
            src="/gallery/2.png"
            alt="dish-img"
            width={1024}
            height={1024}
          />
        </div>
      </div>
      {/* Grid # 3 */}
      <div className="grid grid-cols-4 gap-x-5 md:grid-cols-12 md:gap-x-8">
        {/* <div
          data-speed="0.8"
          className="col-span-2 col-start-3 pl-10 md:col-span-2 md:col-start-2 md:pl-0"
        >
          <Image
            className="w-full object-cover"
            src="/home/dishes/7.webp"
            alt="dish-img"
            width={1024}
            height={1024}
          />
        </div> */}
        <div
          data-speed="0.9"
          className="col-span-2 col-start-1 md:col-span-3 md:col-start-5 md:pt-40 md:pl-10"
        >
          <Image
            className="w-full object-cover"
            src="/gallery/3.png"
            alt="dish-img"
            width={1024}
            height={1024}
          />
        </div>
        {/* <div className="col-span-3 col-start-2 mt-20 md:col-span-2 md:col-start-11 md:mt-0 md:self-end">
          <Image
            className="w-full object-cover"
            src="/home/dishes/9.webp"
            alt="dish-img"
            width={1024}
            height={1024}
          />
        </div> */}
      </div>
      {/* Grid # 4 */}
      {/* <div className="grid grid-cols-4 gap-x-5 md:mt-60 md:grid-cols-12 md:gap-x-8 md:py-28">
        <div className="col-span-2 mt-24 pr-6 md:col-span-3 md:col-start-2 md:-mt-10 md:pr-10">
          <Image
            className="w-full object-cover"
            src="/home/dishes/10.webp"
            alt="dish-img"
            width={1024}
            height={1024}
          />
        </div>
        <div className="col-span-2 col-start-3 mt-60 md:col-span-2 md:col-start-10 md:mt-0 md:pl-10">
          <Image
            className="w-full object-cover"
            src="/home/dishes/11.webp"
            alt="dish-img"
            width={1024}
            height={1024}
          />
        </div>
      </div> */}
      {/* Grid # 5 */}
      {/* <div className="grid grid-cols-4 gap-x-5 md:grid-cols-12 md:gap-x-8">
        <div
          data-speed="0.9"
          className="col-span-2 col-start-1 pt-30 md:col-span-2 md:col-start-5 md:pt-0"
        >
          <Image
            className="w-full object-cover"
            src="/home/dishes/12.webp"
            alt="dish-img"
            width={1024}
            height={1024}
          />
        </div>
      </div> */}
    </section>
  );
};

export default SectionFour;
