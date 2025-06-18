import { FaFingerprint, FaBaby, FaHeart, FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";

const brandColor = "#33cfabd5";

export default function MissionAndValues() {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">

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
