import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import natureLogo from "../assets/nature-logo.png";

const NatureHighlight = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <img
          src={natureLogo}
          alt="Nature Logo"
          className="h-12 md:h-16 mx-auto mb-4"
        />
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
          {t("nature.featuredIn")}{" "}
          <span style={{ color: "#33cfabd5" }}>{t("nature.publication")}</span>
        </h2>
        <p className="text-base text-gray-600 max-w-3xl mx-auto mb-6">
          {t("nature.description")}
        </p>
        <a
          href="https://www.nature.com/articles/s41598-022-25986-6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#33cfabd5] text-white px-6 py-3 rounded-md font-medium hover:brightness-90 transition duration-300"
        >
          {t("nature.button")}
        </a>
      </motion.div>
    </section>
  );
};

export default NatureHighlight;
