import React from "react";
import { useTranslation } from "react-i18next";

import scroll1 from "../assets/partner1.png";
import scroll2 from "../assets/partner2.png";
import scroll3 from "../assets/partner3.png";
import scroll4 from "../assets/partner4.svg";
import scroll5 from "../assets/partner5.png";
import scroll6 from "../assets/partner6.png";
import scroll7 from "../assets/scroll7.png";
import scroll8 from "../assets/scroll8.png";

const PartnersCarousel = () => {
  const { t } = useTranslation();

  const topRow = [scroll6, scroll7, scroll8];
  const bottomRow = [scroll1, scroll2, scroll3, scroll4, scroll5];

  return (
    <div className="w-[90%] mx-auto flex justify-between gap-8 pt-8 pb-4">
      <div className="flex flex-col items-center w-1/2">
        <h3 className="text-center text-base font-semibold text-gray-700 mb-2">
          {t("partnersCarousel.commercialPartners", "Commercial Partners")}
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-5">
          {topRow.map((img, idx) => (
            <div
              key={idx}
              className="w-[180px] h-[100px] flex justify-center items-center"
            >
              <img
                src={img}
                alt={`partner-top-${idx}`}
                className="w-full h-full object-contain opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center w-1/2">
        <h3 className="text-center text-base font-semibold text-gray-700 mb-2">
          {t("partnersCarousel.institutionalPartners", "Institutional Partners")}
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-5">
          {bottomRow.map((img, idx) => (
            <div
              key={idx}
              className="w-[140px] h-[70px] flex justify-center items-center"
            >
              <img
                src={img}
                alt={`partner-bottom-${idx}`}
                className="w-full h-full object-contain opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
