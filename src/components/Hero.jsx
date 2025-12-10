import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

function Hero() {
  const [videoScreen, setVideoScreen] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  // function for setVideo
  const handleVideoScreenSet = () => {
    if (window.innerWidth < 760) {
      setVideoScreen(smallHeroVideo);
    } else {
      setVideoScreen(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoScreenSet);

    return () => {
      window.removeEventListener("resize", handleVideoScreenSet);
    };
  }, []);

  // animation for text
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, delay: 2, y: -50 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          Iphone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoScreen}
          >
            <source src={videoScreen} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlight" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
}

export default Hero;
