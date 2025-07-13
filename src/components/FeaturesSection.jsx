import { motion } from "framer-motion";
import {
  Fingerprint,
  Cpu,
  Camera,
  MousePointerClick,
  Package,
} from "lucide-react";

const iconMap = {
  Fingerprint,
  Cpu,
  Camera,
  MousePointerClick,
  Package,
};

export function FeaturesSection({ features }) {
  return (
    <section className="bg-gradient-to-br from-[#0a0f1a] to-[#1e293b] px-6 sm:px-10 py-20 font-spaceGrotesk">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-12 justify-center">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center gap-4"
                style={{ flexBasis: 'calc((100% - 2 * 3rem) / 3)', minWidth: '220px' }}
              >
                <Icon className="w-10 h-10 text-white" />
                <h3 className="text-xl font-semibold text-white">{f.title}</h3>
                <p className="text-gray-300 text-sm">{f.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
