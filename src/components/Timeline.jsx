import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import img2017 from '../assets/2017.webp';
import img2019 from '../assets/2019.jpg';
import synologo from '../assets/synologo.png';
import img2022 from '../assets/2022.svg';
import equipment from '../assets/equipment.png';
import img2024 from '../assets/2024.png';
import img2025 from '../assets/2025.jpeg';

const imagesMap = {
  img2017,
  img2019,
  synologo,
  img2022,
  equipment,
  img2024,
  img2025,
};

const ArrowRightIcon = ({ className }) => (
  <svg
    className={`w-4 h-4 flex-shrink-0 text-[#5ce6b1db] ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Timeline = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const timelineData = t("timeline", { returnObjects: true });

  const renderContent = (content, isLeft) => {
    if (Array.isArray(content)) {
      return (
        <ul
          className="list-none p-0 m-0 space-y-2"
          style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 200 }}
        >
          {content.map((item, i) => (
            <li
              key={i}
              className={`flex items-start leading-snug text-base ${
                isLeft ? "flex-row-reverse" : ""
              }`}
              style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 200 }}
            >
              <ArrowRightIcon className={isLeft ? "ml-2" : "mr-2"} />
              <span className={isLeft ? "text-right" : "text-left"} style={{ flex: 1 }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p
        className={`whitespace-pre-line leading-snug text-base ${
          isLeft ? "text-right" : "text-left"
        }`}
        style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 200 }}
      >
        {content}
      </p>
    );
  };

  const sortedTimeline = timelineData.slice().sort((a, b) => a.ano - b.ano);

  return (
    <section className="relative w-full bg-white py-16 px-4 md:px-12">
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 border-l border-dashed border-gray-300 transform -translate-x-1/2 z-0" />
        <div className="flex flex-col gap-16">
          {sortedTimeline.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative w-full flex flex-col md:flex-row items-center ${
                  !isLeft ? "md:flex-row-reverse" : ""
                }`}
                data-aos={isLeft ? "fade-right" : "fade-left"}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#5ce6b1db] rounded-full z-10 shadow-sm" />
                <div
                  className={`w-full md:w-1/2 px-4 md:px-6 ${
                    isLeft ? "text-right" : "text-left"
                  }`}
                >
                  <p
                    className="text-[#5ce6b1db] text-xl mb-1"
                    style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700 }}
                  >
                    {item.ano}
                  </p>
                  <h3
                    className="text-gray-700 text-lg mb-2"
                    style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700 }}
                  >
                    {item.titulo}
                  </h3>
                  {renderContent(item.conteudo, isLeft)}
                </div>
                {item.imagem && imagesMap[item.imagem] && (
                  <div
                    className={`w-full md:w-1/2 mt-4 md:mt-0 flex justify-center ${
                      isLeft ? "md:mr-1" : "md:ml-1"
                    }`}
                    style={{ maxWidth: "100px" }}
                  >
                    <img
                      src={imagesMap[item.imagem]}
                      alt={item.titulo}
                      className="w-24 h-24 rounded-full object-cover shadow-sm border border-gray-100"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
