import React, { useEffect } from "react";
import babyabout from "../assets/babyabout.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutHero() {
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
        style={{ paddingTop: "8rem", paddingBottom: "3rem", fontFamily: "'Kanit', sans-serif", fontWeight: 100 }}
      >
        <h1
          className="text-white text-3xl md:text-4xl max-w-3xl"
          style={{ fontWeight: 600, marginBottom: "1rem" }}
        >
          About Us
        </h1>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white text-sm font-medium leading-relaxed"
          style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 100 }}
        >
          <p>
            Synolo<sup>®</sup> Biometrics was created to commercialize the infant biometrics
            collection technology developed at UC San Diego with funding from the Gates Foundation. This
            technology was clinically proven in a large joint study performed in a major hospital in Mexico,
            utilizing prototype devices and offline image processing.
          </p>
          <p>
            Since forming Synolo<sup>®</sup> in 2021, the original "Panda" prototype has been transformed into
            a fully commercialized unit with proprietary, real-time, high resolution image processing,
            ergonomic design, and a robust SDK for OEM integration that is already successfully deployed
            in the field in the US and Brazil.
          </p>
        </div>
      </div>
    </section>
  );
}
