import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

import babyImage from "../assets/baby.png";
import { MdOutlineCheckCircle } from "react-icons/md";

const Hero = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[770px] max-h-[800px] overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={babyImage}
          alt="Background"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div
        className="relative z-10 w-full h-full flex flex-col md:flex-row"
        data-aos="fade-up"
      >
        <div className="flex-1 flex flex-col justify-center md:pl-24 pl-6 min-h-[60vh]">
          <div
            className="space-y-1 text-center md:text-left px-4 md:px-0 mt-16 md:mt-0"
            style={{ minWidth: "300px" }}
          >
            <h1
              className="leading-[1.1] text-gray-900 uppercase text-[3.5rem] sm:text-[clamp(1.5rem,6vw,5rem)] sm:normal-case"
              style={{
                fontFamily: "'Kanit', sans-serif",
                fontWeight: 800,
                marginBottom: 0,
              }}
            >
              {t("hero.titleLine1")}
              <br className="sm:block hidden" />
              <span className="text-gradient">{t("hero.highlight")}</span>
            </h1>
            <h1
              className="leading-[1.1] text-gray-900 uppercase text-[2.5rem] sm:text-[clamp(1.2rem,5.5vw,4.5rem)] sm:normal-case"
              style={{
                fontFamily: "'Kanit', sans-serif",
                fontWeight: 800,
              }}
            >
              {t("hero.titleLine2")}
            </h1>
          </div>

          <div
            className="mt-[18rem] md:mt-10 text-center md:text-left px-4 md:px-0"
            style={{ minWidth: "300px" }}
          >
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-gray-800 font-semibold text-[clamp(1rem,1.2vw,1.3rem)]">
              <MdOutlineCheckCircle className="text-[#5ce6b1db] text-[2rem] flex-shrink-0" />
              <span className="min-w-0 text-center md:text-left">
                {t("hero.certification")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
