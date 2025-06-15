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
          {/* Value 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
          >
            <FaFingerprint className="text-4xl mx-auto mb-4" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: brandColor }}>
              Innovation
            </h3>
            <p className="text-sm text-gray-600">
              We develop groundbreaking biometric technologies that redefine what’s possible, from newborns to adulthood.
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
          >
            <FaBaby className="text-4xl mx-auto mb-4" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: brandColor }}>
              Compassion
            </h3>
            <p className="text-sm text-gray-600">
              We design for the most vulnerable—newborns and children—ensuring safety, dignity and identity from day one.
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
          >
            <FaHeart className="text-4xl mx-auto mb-4" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: brandColor }}>
              Integrity
            </h3>
            <p className="text-sm text-gray-600">
              We uphold ethical standards in health, science, and privacy in every biometric solution we deliver.
            </p>
          </motion.div>

          {/* Value 4 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
          >
            <FaGlobeAmericas className="text-4xl mx-auto mb-4" style={{ color: brandColor }} />
            <h3 className="text-xl font-semibold mb-2" style={{ color: brandColor }}>
              Global Impact
            </h3>
            <p className="text-sm text-gray-600">
              We collaborate worldwide to improve identity infrastructure and access to services in underserved communities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
