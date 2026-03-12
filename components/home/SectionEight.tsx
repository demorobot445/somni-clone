import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const SectionEight = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-center bg-[#1C120F]">
      <div className="relative px-5 py-14 md:px-8">
        <div className="grid grid-cols-4 gap-x-5 gap-y-14 md:grid-cols-12 md:gap-x-8 md:gap-y-0">
          <div className="col-span-4 flex flex-col gap-6 text-white md:col-span-5 md:gap-10">
            <h1 className="font-display block text-5xl md:text-[6.042vw] md:leading-none">
              Favorite Products
            </h1>
            <p className="md:text-[1.5vw] md:leading-[130%]">
              Since the fifteenth century, when roasted beans were first poured
              in Yemen, it carried more than energy. it carried meaning. In Los
              Angeles, we carry this heritage forward.
            </p>
            <div className="flex items-center gap-6 font-semibold md:text-[1.7vw] md:leading-[130%]">
              <span>Drip Coffee</span>
              <span>Pods</span>
              <span>Cans</span>
            </div>
          </div>
          <div className="col-span-4 md:col-span-7">
            <Swiper
              spaceBetween={24}
              slidesPerView={1.2}
              breakpoints={{
                "1024": {
                  slidesPerView: 2.2,
                },
              }}
            >
              {[...Array(10)].map((elem, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div>
                      <Image
                        className="w-full rounded-2xl object-cover md:rounded-3xl"
                        src={`/home/section-eight/item-${index % 2 === 0 ? 1 : 2}.png`}
                        alt="item"
                        width={500}
                        height={500}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
