import { FaFingerprint, FaBaby, FaHeart, FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";

const brandColor = "#33cfabd5";

export default function MissionAndValues() {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold mb-6"
          style={{ color: brandColor }}
        >
          Our Mission & Core Values
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto text-md sm:text-lg text-gray-600 mb-12"
        >
          Our mission is to empower global identity from birth, through innovative, scientifically-proven biometric solutions that protect children and improve lives.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <FaFingerprint className="text-5xl mx-auto mb-3" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold" style={{ color: brandColor }}>
              Innovation
            </h3>
          </div>

          <div className="text-center">
            <FaBaby className="text-5xl mx-auto mb-3" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold" style={{ color: brandColor }}>
              Compassion
            </h3>
          </div>

          <div className="text-center">
            <FaHeart className="text-5xl mx-auto mb-3" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold" style={{ color: brandColor }}>
              Integrity
            </h3>
          </div>

          <div className="text-center">
            <FaGlobeAmericas className="text-5xl mx-auto mb-3" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold" style={{ color: brandColor }}>
              Global Impact
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
