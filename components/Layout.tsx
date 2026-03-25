import localFont from "next/font/local";
import Header from "./Header";
import FooterV2 from "./FooterV2";

const founderGrotesk = localFont({
  src: [
    {
      path: "./fonts/founders-grotesk-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/founders-grotesk-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-founder-grotesk",
});

const gtSuperDisplay = localFont({
  src: "./fonts/gt-super-display-light.woff2",
  variable: "--font-gt-super-display",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      id="smooth-wrapper"
      className={`${founderGrotesk.variable} ${gtSuperDisplay.variable} font-sans`}
    >
      <div id="smooth-content">
        <Header />
        {children}
        <FooterV2 />
      </div>
    </main>
  );
};

export default Layout;
