import Link from "next/link";
import { Logo } from "./common/Icons";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);

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
              end: () => `+=${innerHeight * 2}`,
              scrub: true,
            },
          })
          .to(container.current!, { xPercent: -100, x: "100vw" });
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="flex w-fit">
      <div className="hidden h-screen w-screen md:block" />

      <footer className="relative pt-10 md:h-dvh md:w-screen md:pt-0">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/footer-bg.png"
          alt="background"
          width={1920}
          height={1080}
        />

        <div className="relative isolate flex h-full flex-col px-5 md:px-8">
          <div className="grid flex-1 grid-cols-4 items-center gap-x-5 md:grid-cols-12 md:gap-x-8">
            <div className="col-span-4 max-md:px-7 md:col-span-8 md:col-start-3">
              <div className="pb-10 md:pb-12">
                <Logo />
              </div>

              <span className="sr-only">Somni</span>

              <div className="col-span-4 grid place-items-center pb-12 max-md:hidden md:col-span-12">
                <div className="inline-grid gap-6 text-center md:flex md:justify-between">
                  <Link
                    href="#"
                    target="_blank"
                    aria-label="Make a reservation (opens in a new tab)"
                    className="text-body-text bg-accent hover:bg-off-white hover:text-accent border-accent min-w-40 rounded-full border px-3 py-1.25 text-white md:px-4 md:py-[0.34375rem]"
                  >
                    Make a reservation
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    aria-label="Make a reservation (opens in a new tab)"
                    className="text-body-text bg-accent hover:bg-off-white hover:text-accent border-accent min-w-40 rounded-full border px-3 py-1.25 text-white md:px-4 md:py-[0.34375rem]"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-x-5 md:grid-cols-12 md:gap-x-8">
            <div className="col-span-4 max-md:pb-6 md:col-span-3">
              <address className="flex flex-col text-center not-italic md:text-left md:text-[1.094vw] md:leading-[150%]">
                <p>9045 Nemo, Los Angeles, California 90069</p>
                <Link href="mailto:info@somnirestaurant.com">
                  info@somnirestaurant.com
                </Link>
              </address>
            </div>

            <div className="col-span-4 max-md:pb-14">
              <p className="text-center md:text-left md:text-[1.094vw] md:leading-[150%]">
                Wednesday - Sunday
                <br />
                Chef&apos;s Counter Seating at 7:30pm
                <br />
                Private Cellar Seating at 5:30pm
                <br />
                Monday &amp; Tuesday Closed
              </p>
            </div>

            <div className="col-span-4 mb-24 grid place-items-center md:hidden">
              <div className="inline-grid gap-6 text-center">
                <Link
                  href="#"
                  target="_blank"
                  aria-label="Make a reservation (opens in a new tab)"
                  className="text-body-text bg-accent hover:bg-off-white hover:text-accent border-accent min-w-40 rounded-full border px-3 py-1.25 text-white md:px-4 md:py-[0.34375rem]"
                >
                  Make a reservation
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  aria-label="Make a reservation (opens in a new tab)"
                  className="text-body-text bg-accent hover:bg-off-white hover:text-accent border-accent min-w-40 rounded-full border px-3 py-1.25 text-white md:px-4 md:py-[0.34375rem]"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="col-span-4 flex flex-col max-md:pb-14 md:col-span-2 md:text-[1.094vw] md:leading-[150%]">
              <div className="text-complementary-title text-center uppercase md:text-left">
                Follow us
              </div>
              <Link
                className="text-center underline hover:no-underline md:text-left"
                href="https://www.instagram.com/somnirestaurant/"
              >
                Instagram
              </Link>
            </div>

            <form
              className="text-soft-black relative col-span-4 pb-7 md:col-span-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <label
                htmlFor="newsletter-email"
                className="uppercase md:text-[1.094vw] md:leading-[150%]"
              >
                Subscribe to our Newsletter
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input-footer font-founders-grotesk placeholder:text-deep-gray h-8 w-full border-b bg-transparent outline-none placeholder:text-[1rem]"
              />
              <button type="submit">
                <svg
                  viewBox="0 0 13 13"
                  className="absolute top-9 right-0 z-10 size-3 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <use href="#icon-arrow-outward" />
                </svg>
              </button>
            </form>
          </div>

          <div className="text-deep-gray col-span-4 flex items-center justify-center gap-2 pt-24 pb-10 text-[0.8125rem]/[1.125rem] leading-none md:col-span-12 md:justify-start md:pt-18 md:pb-6 md:text-[0.885vw]">
            <span className="max-md:hidden">
              © Somni 2024 All Rights Reserved.
            </span>
            <a
              className="underline hover:no-underline"
              href="/en/privacy-policy"
            >
              Privacy Policy
            </a>
            <a className="underline hover:no-underline" href="/en/terms-of-use">
              Terms of Use
            </a>
            <a className="underline hover:no-underline" href="/en/faqs">
              FAQs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
