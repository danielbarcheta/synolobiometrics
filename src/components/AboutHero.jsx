import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import babyabout from "../assets/babyabout.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutHero() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  return (
    <section
      className="relative w-full bg-cover bg-center flex items-center justify-center pt-48 overflow-hidden"
      style={{
        backgroundImage: `url(${babyabout})`,
        minHeight: "500px",
      }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-0" />

      <div
        className="relative z-10 w-full px-8 md:px-16 max-w-7xl mx-auto"
        data-aos="fade-up"
        style={{
          paddingTop: "8rem",
          paddingBottom: "3rem",
          fontFamily: "'Kanit', sans-serif",
          fontWeight: 100,
        }}
      >
        <h1
          className="text-white text-3xl md:text-4xl max-w-3xl"
          style={{ fontWeight: 600, marginBottom: "1rem" }}
        >
          {t("aboutHero.title")}
        </h1>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white text-sm font-medium leading-relaxed"
          style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 100 }}
        >
          <p>{t("aboutHero.paragraph1")}</p>
          <p>{t("aboutHero.paragraph2")}</p>
        </div>
      </div>
    </section>
  );
}
