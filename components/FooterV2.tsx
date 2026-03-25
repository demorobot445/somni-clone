import Image from "next/image";

const FooterV2 = () => {
  return (
    <footer className="-mt-px flex w-full flex-col gap-20 bg-[#1E1512] px-5 py-10 text-white md:px-24 md:py-20">
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        <p>8054 W 3RD ST, LOS ANGELES, CA </p>
        <p>555 FULTON ST, SAN FRANCISCO, CA</p>
      </div>
      <Image
        className="w-full object-contain"
        src="/footer-logo.png"
        alt="logo"
        width={1920}
        height={1080}
      />
      <p className="mx-auto text-center">ALL RIGHTS RESERVED HALA COFFEE </p>
    </footer>
  );
};

export default FooterV2;
