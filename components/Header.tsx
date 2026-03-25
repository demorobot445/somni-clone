import Link from "next/link";
import { Cart, Hamburger, Search, User } from "./common/Icons";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-30 flex w-full items-center justify-between p-5 text-white md:grid md:grid-cols-3">
      <div className="size-7.5">
        <Hamburger />
      </div>
      <div className="hidden items-center justify-center gap-8 md:flex">
        {["home", "story", "shop", "gallery"].map((elem, index) => {
          return (
            <Link className="text-lg uppercase" key={index} href="#">
              {elem}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-end gap-8">
        <div className="size-7.5">
          <User />
        </div>
        <div className="size-7.5">
          <Search />
        </div>
        <div className="size-7.5">
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
