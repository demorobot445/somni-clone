import { useState, useRef } from "react";
import { Cart, Close, Hamburger } from "./common/Icons";
import { gsap } from "gsap";
import { useCartStore } from "@/store/cart";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { openCart } = useCartStore();
  const menuRef = useRef(null);

  const menu = [
    { link: "home", href: 0 },
    { link: "story", href: "#story" },
    { link: "shop", href: "#shop" },
    { link: "gallery", href: "#gallery" },
  ];

  const toggleMenu = () => {
    setOpen(!open);

    if (!open) {
      gsap.fromTo(
        menuRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.5, ease: "power3.out" },
      );
    } else {
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  };

  return (
    <header className="absolute top-0 left-0 z-30 flex w-full items-center justify-between p-5 text-white">
      {/* Hamburger */}
      <div className="size-7.5 md:hidden" onClick={toggleMenu}>
        <Hamburger />
      </div>

      {/* Desktop Menu */}
      <div className="size-7.5" />
      <div className="hidden items-center justify-center gap-8 md:flex">
        {menu.map((elem, index) => (
          <button
            key={index}
            onClick={() => gsap.to(window, { scrollTo: elem.href })}
            className="cursor-pointer text-lg uppercase"
          >
            {elem.link}
          </button>
        ))}
      </div>
      <button onClick={openCart} className="size-7.5 cursor-pointer">
        <Cart />
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 flex h-screen w-full -translate-x-full transform items-center justify-center bg-black p-10 md:hidden"
      >
        <button className="absolute inset-5 size-10" onClick={toggleMenu}>
          <Close />
        </button>

        <div className="flex flex-col gap-6">
          {menu.map((elem, index) => (
            <button
              key={index}
              onClick={() => {
                gsap.to(window, {
                  scrollTo: elem.href,
                });
                toggleMenu();
              }}
              className="text-xl uppercase"
            >
              {elem.link}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <div className="flex items-center justify-end gap-8">
        <div className="size-7.5">
          <User />
        </div>
        <div className="size-7.5">
          <Search />
        </div>
        <div className="size-7.5">
          <Cart />
        </div>
      </div> */
}
