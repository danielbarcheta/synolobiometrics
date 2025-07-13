import { useTranslation } from "react-i18next";
import gatesresearch from "../assets/gatesresearch.png";
import nature from "../assets/nature.jpg";
import preprints from "../assets/preprints.png";

export default function ArticlesSection() {
  const { t } = useTranslation();

  const articles = t("articles.items", { returnObjects: true });

  const images = [gatesresearch, nature, preprints];

  return (
    <section className="w-full px-6 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-poppins font-semibold text-center"
          style={{
            fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
            lineHeight: 1.2,
            marginBottom: "0.25rem",
            color: "#000",
          }}
        >
          {t("articles.title")}
        </h2>
        <p className="text-center text-gray-700 text-lg max-w-4xl mx-auto mb-10">
          {t("articles.subtitle")}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-12">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs flex flex-col"
            >
              <div className="rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-36 flex items-center justify-center bg-white flex-shrink-0">
                <img
                  src={images[index]}
                  alt={article.title}
                  className="object-contain transform scale-[0.6]"
                />
              </div>
              <div className="p-2 flex-grow flex items-center">
                <p
                  className="leading-relaxed font-medium text-gray-800 text-center"
                  style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.85rem)" }}
                >
                  {article.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
