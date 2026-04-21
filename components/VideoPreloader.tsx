import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { store } from "@/store";

const VideoPreloader = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".btn", { delay: 2, opacity: 1 });
    },
    { scope: container },
  );

  const handleClick = () => {
    gsap.to(container.current, {
      autoAlpha: 0,
      duration: 1,
      onComplete: () => {
        store.isLoader = false;
      },
    });
  };

  return (
    <div
      ref={container}
      className="fixed inset-0 z-50 h-full w-full overflow-hidden bg-black"
    >
      {/* Vimeo Background */}
      <iframe
        className="pointer-events-none absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-115"
        src="https://player.vimeo.com/video/1180135092?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&background=1&autoplay=1&loop=1&muted=1"
        allow="autoplay; fullscreen"
        allowFullScreen
      />

      {/* Button */}
      <button
        onClick={handleClick}
        className="btn absolute bottom-[10%] left-1/2 z-20 -translate-x-1/2 cursor-pointer text-xl text-white uppercase opacity-0 mix-blend-difference"
      >
        Enter
      </button>
    </div>
  );
};

export default VideoPreloader;
