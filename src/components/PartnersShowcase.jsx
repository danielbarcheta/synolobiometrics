import { MdArrowForward } from "react-icons/md";

import scroll1 from "../assets/partner1.png";
import scroll2 from "../assets/partner2.png";
import scroll3 from "../assets/partner3.png";
import scroll4 from "../assets/partner4.svg";
import scroll5 from "../assets/partner5.png";

const partners = [
  { name: "Partner 1", logo: scroll1 },
  { name: "Partner 2", logo: scroll2 },
  { name: "Partner 3", logo: scroll3 },
  { name: "Partner 4", logo: scroll4 },
  { name: "Partner 5", logo: scroll5 },
];

export default function PartnersShowcase() {
  return (
    <section className="w-full bg-white pt-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-[60px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-[30px] max-w-full object-contain grayscale"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700 transition-colors hover:text-[#33cfab]"
          >
            Become a partner <MdArrowForward className="text-base" />
          </a>
        </div>
        
      </div>
    </section>
  );
}
