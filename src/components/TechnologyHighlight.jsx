import { useState } from "react";
import {
  FaMicrochip,
  FaRobot,
  FaShieldAlt,
  FaPuzzlePiece,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const brandColor = "#33cfabd5";

const techItems = [
  {
    title: "Embedded Optics",
    icon: <FaMicrochip className="text-2xl sm:text-3xl" style={{ color: brandColor }} />,
    description:
      "High-resolution optical technology avoids contact distortion and ensures reliable capture from newborn fingers.",
  },
  {
    title: "AI-Based Matching",
    icon: <FaRobot className="text-2xl sm:text-3xl" style={{ color: brandColor }} />,
    description:
      "Proprietary age-correction algorithms enable consistent 1:N fingerprint matching from birth through adulthood.",
  },
  {
    title: "Secure by Design",
    icon: <FaShieldAlt className="text-2xl sm:text-3xl" style={{ color: brandColor }} />,
    description:
      "Our platform is built on strong ethical principles, securing health and identification data at every level.",
  },
  {
    title: "Robust SDK Integration",
    icon: <FaPuzzlePiece className="text-2xl sm:text-3xl" style={{ color: brandColor }} />,
    description:
      "Our flexible SDK allows seamless integration with biometric and government systems worldwide.",
  },
];

export default function TechnologyHighlight() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center text-3xl sm:text-4xl font-bold mb-12"
          style={{ color: brandColor }}
        >
          Core Technology Behind Synolo® Neo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techItems.map((item, idx) => (
            <div key={idx}>
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-white hover:text-[color:#33cfabd5] transition-colors"
                aria-expanded={openIndex === idx}
                aria-controls={`tech-desc-${idx}`}
              >
                <div className="flex items-center gap-4 text-left">
                  {item.icon}
                  <span className="text-lg font-medium">{item.title}</span>
                </div>

                {/* Setinha SVG sutil e fina, branca, rotaciona quando aberto */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.p
                    id={`tech-desc-${idx}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-sm text-gray-300 pl-10 pr-2"
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="border-b border-gray-700 mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
