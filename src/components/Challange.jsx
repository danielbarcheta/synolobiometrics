import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const failurePoints = [
  {
    title: "Standard 500ppi Fails",
    description:
      "Infant prints are tiny and require highly sophisticated imaging techniques; high-resolution alone is not enough.",
  },
  {
    title: "Standard Contact Readers Fails",
    description:
      "Infant fingers are easily deformable and fingerprints are distorted by contact pressure, obscuring details.",
  },
  {
    title: "Standard Non-Contact Readers Fails",
    description:
      "Infants' behavior make them difficult to position for consistent image quality.",
  },
  {
    title: "Longitudinal Matching Fails",
    description:
      "As infants grow to be adults, matching becomes difficult or impossible without accommodating age-related changes.",
  },
];

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
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="flex flex-col items-center px-6 md:px-20 py-24 bg-transparent max-w-full">
      {/* Título */}
      <h1
        className="font-poppins font-semibold text-gray-900 text-center text-balance text-[clamp(1.4rem,5vw,2.2rem)] leading-tight"
      >
        The Challenge: Newborn to 8 year old ID Capture
      </h1>

      {/* Subtítulo */}
      <p
        className="mt-3 italic text-center text-gray-500 font-medium text-[clamp(0.9rem,1.4vw,1.1rem)] max-w-xl"
      >
        Why infant print identification is so difficult?
      </p>

      {/* Tópicos */}
      <div
        data-aos="fade-up"
        className="mt-12 flex justify-center gap-6 max-w-full flex-wrap"
      >
        {failurePoints.map(({ title, description }, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 md:w-[18%] w-full mb-6 text-left"
          >
            <p className="text-gray-700 text-[15px] leading-snug flex items-start gap-3">
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
