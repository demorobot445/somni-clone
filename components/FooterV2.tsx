import Image from "next/image";

const FooterV2 = () => {
  return (
    <footer className="flex w-full flex-col gap-20 bg-[#1E1512] px-24 py-20 text-white">
      <div className="flex w-full items-center justify-between">
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
