import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { equipment } from "../assets";

import {
  FingerPrintIcon,
  AcademicCapIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  CameraIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

const cardData = [
  {
    text: "Specifically designed to capture and match fingerprints from birth to adulthood",
    icon: FingerPrintIcon,
  },
  {
    text: "Incorporates patented imaging and usability technology developed at UCSD under grant from Gates Foundation",
    icon: AcademicCapIcon,
  },
  {
    text: "Scientifically proven to provide 1:N matching from birth to adulthood in multiple studies of over 800 infants, newborns, children and adults",
    icon: ChartBarIcon,
  },
  {
    text: "Currently in use in hospitals, clinics and schools in the US, Europe, Middle East and LATAM",
    icon: GlobeAltIcon,
  },
  {
    text: "SDK available for integration with customer biometric systems",
    icon: CodeBracketIcon,
  },
  {
    text: "Age-corrected images output in standard 500 dpi and super hi-res",
    icon: CameraIcon,
  },
];

const Solution = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  return (
    <section className="w-full bg-gray-900 text-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row px-6 md:px-10 gap-x-16">
        {/* Texto e cards */}
        <div
          className="flex flex-col justify-center flex-grow md:w-1/2 pr-0 md:pr-12 mb-10 md:mb-0 order-last md:order-first"
          data-aos="fade-right"
        >
          <div className="mb-8 md:mb-10">
            <h1
              className="font-poppins font-semibold"
              style={{
                fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
                lineHeight: 1.2,
                marginBottom: "0.25rem",
                color: "#fff",
              }}
            >
              The Solution
            </h1>
            <h2
              className="font-semibold"
              style={{
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
                lineHeight: 1.3,
                whiteSpace: "nowrap",
                color: "#5ce6b1db",
              }}
            >
              Synolo® Neo Fingerprint Reader
            </h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[600px]"
            data-aos="fade-up"
          >
            {cardData.map(({ text, icon: Icon }, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <Icon className="w-5 h-5 text-[#5ce6b1db] flex-shrink-0 mt-1" />
                <p className="text-[clamp(0.8rem,2vw,1rem)] leading-relaxed font-medium">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem e botão */}
        <div
          className="relative flex-shrink-0 md:w-1/2 flex flex-col items-center justify-center order-first md:order-last"
          data-aos="fade-left"
        >
          {/* Fundo radial */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `
                radial-gradient(
                  circle at 40% 60%, 
                  rgba(255, 255, 255, 0.08) 0%, 
                  rgba(255, 255, 255, 0.02) 40%, 
                  transparent 70%
                )
              `,
              transform: "scale(1.3)",
              pointerEvents: "none",
              filter: "blur(12px)",
            }}
          />

          {/* Imagem */}
          <img
            src={equipment}
            alt="equipment"
            className="w-full max-w-[600px] h-auto object-contain relative z-10"
          />

          {/* Botão no desktop: canto inferior direito absoluto
              No mobile: fica abaixo da imagem, centralizado */}
          <Link
            to="/technology"
            className="
              mt-6
              md:absolute md:bottom-6 md:right-6
              relative
              text-white
              text-sm md:text-lg
              font-semibold
              flex
              items-center
              gap-1
              bg-transparent
              px-4 py-2
              rounded
              hover:text-[#5ce6b1db]
              focus:outline-none
              transition-colors
              whitespace-nowrap
            "
          >
            View More
            <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 stroke-[1.5]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solution;
