import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";

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
    <section className="w-full bg-white pt-20 px-6 mb-10">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl text-center mb-12 text-gray-700"
          style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 600 }}
        >
          Our Global Partners
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0.5">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="flex items-center justify-center h-[80px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-[40px] max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 px-4 py-2 rounded-full transition-colors hover:text-[#33cfab]"
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            Become a partner <MdArrowForward className="text-base" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
