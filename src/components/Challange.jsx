import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const ChevronRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#33cfb0"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="flex-shrink-0 mt-[3px]"
    aria-hidden="true"
  >
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const Challenge = () => {
  const { t } = useTranslation();

  const failurePoints = t("challenge.failurePoints", { returnObjects: true });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="flex flex-col items-center px-6 md:px-20 pt-16 pb-6 bg-transparent max-w-full relative">
      
      <div
        style={{
          position: "absolute",
          top: "40px",          // linha mais para baixo, próxima do título
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "1px",
          backgroundColor: "rgba(10, 25, 47, 0.6)",
          borderRadius: "0.5px",
        }}
      />

      <h1
        className="font-poppins font-semibold text-center text-balance text-[clamp(1.4rem,5vw,2.2rem)] leading-tight"
        style={{ color: "#0b1f2a" }}
      >
        {t("challenge.title")}
      </h1>

      <p
        className="mt-3 italic text-center text-gray-500 font-medium text-[clamp(0.9rem,1.4vw,1.1rem)] max-w-xl"
      >
        {t("challenge.subtitle")}
      </p>

      <div
        data-aos="fade-up"
        className="mt-12 flex flex-wrap justify-center gap-12 max-w-[90vw]"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {failurePoints.map(({ title, description }, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex-grow md:flex-grow-0 md:w-[22%] w-full min-w-[260px] mb-6 text-left"
          >
            <p className="text-gray-700 text-[17px] leading-relaxed flex items-start gap-4">
              <ChevronRightIcon />
              <span>
                <span className="font-semibold">{title}:</span> {description}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challenge;
