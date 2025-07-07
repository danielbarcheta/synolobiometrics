import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ScanLine,
  Image,
  Gauge,
  Sun,
  Usb,
  Ruler,
  Weight,
  MonitorSmartphone,
} from "lucide-react";
import neo1 from "../assets/neo1.png";
import neo2 from "../assets/neo2.png";
import neo3 from "../assets/neo3.png";
import neo4 from "../assets/neo4.png";

const iconMap = {
  "Sensor Resolution": ScanLine,
  "Processed Image": Image,
  "FPS": Gauge,
  "Light Source": Sun,
  "Interface": Usb,
  "Dimensions": Ruler,
  "Weight": Weight,
  "Compatibility": MonitorSmartphone,
};

const images = [neo1, neo2, neo3, neo4];

export function SpecsSection({ specsNeo }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row bg-white px-6 lg:px-20 py-16 font-spaceGrotesk gap-16 max-w-screen-xl mx-auto">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-start gap-6 relative">
        <div className="relative w-full h-[320px] flex items-center justify-center">
          {images.map((img, idx) => (
            <AnimatePresence key={idx}>
              {idx === currentImageIndex && (
                <motion.img
                  key={img}
                  src={img}
                  alt={`Neo image ${idx + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              )}
            </AnimatePresence>
          ))}
        </div>

        <div className="text-left w-full max-w-xl">
          <h3 className="text-2xl font-bold text-slate-800 mb-3">
            {specsNeo.title}
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            {specsNeo.description}
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">
          {specsNeo.subtitle}
        </h2>
        <div className="flex-grow flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            {specsNeo.specs.map((spec, idx) => {
              const Icon = iconMap[spec.label] || ScanLine;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-4"
                >
                  <Icon className="w-8 h-8 text-[#33cfabd5] flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      {specsNeo.labels[spec.label]}
                    </h3>
                    <p className="text-gray-700">{spec.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
