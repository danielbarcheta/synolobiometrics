import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { pressData } from "../constants";
import { GiEarthAmerica } from "react-icons/gi";
import { HiArrowNarrowRight } from "react-icons/hi";
import PressHeroImg from "../assets/PressHero.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function PressHero() {
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleMouseMove = (e) => {
      const bounds = carousel.getBoundingClientRect();
      const y = e.clientY - bounds.top;

      if (y < bounds.height * 0.25) {
        carousel.scrollBy({ top: -10, behavior: "smooth" });
      } else if (y > bounds.height * 0.75) {
        carousel.scrollBy({ top: 10, behavior: "smooth" });
      }
    };

    carousel.addEventListener("mousemove", handleMouseMove);
    return () => carousel.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const titleColor = "rgba(248, 249, 252, 0.94)";

  const scrollToBottom = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${PressHeroImg})`, minHeight: "100vh" }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0" />

      <motion.div
        className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 h-screen flex flex-col lg:flex-row items-center gap-[300px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col justify-between w-full lg:w-[50%] pt-40 pb-8 self-start lg:mt-12 h-[80vh]">
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 ml-8 mb-2">
              <h1
                className="font-normal"
                style={{
                  fontFamily: "'Libertinus Math', serif",
                  fontSize: "2.3rem",
                  color: "white",
                }}
              >
                {t("pressHero.title")}
              </h1>
            </div>

            <div className="ml-4 sm:ml-8">
              <p
                className="font-bold max-w-5xl"
                style={{
                  fontWeight: 300,
                  fontSize: "1.4rem",
                  color: titleColor,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {t("pressHero.subtitle")}
              </p>
            </div>

            <Link
              to="/blog"
              className="flex items-center gap-2 text-white mt-8 ml-8 hover:underline focus:outline-none"
            >
              <span className="text-base font-medium">
                {t("pressHero.blogLink")}
              </span>
              <HiArrowNarrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-row gap-4 px-4 sm:px-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {pressData.slice(0, 2).map((item) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-full h-[100px] bg-white overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-1 text-white text-left">
                  <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
                  <p className="text-xs text-gray-300 mt-1">{item.subtitle}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="flex lg:flex-col w-full lg:w-[45%] h-auto lg:h-[80vh] mt-10 lg:mt-[100px] items-center lg:items-end justify-start lg:justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div
            ref={carouselRef}
            className="flex flex-col justify-center gap-8 w-full pr-4 lg:max-h-full lg:overflow-y-auto custom-scroll"
          >
            {pressData.slice(2).map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full h-24 mx-auto bg-white bg-opacity-10 backdrop-blur-sm overflow-hidden hover:bg-opacity-20 transition-all duration-300 items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-auto object-cover flex-shrink-0"
                />
                <div className="py-6 px-4 flex flex-col justify-center text-white">
                  <h4 className="text-base font-semibold leading-tight">{item.title}</h4>
                  <p className="text-sm text-gray-300 mt-1">{item.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
