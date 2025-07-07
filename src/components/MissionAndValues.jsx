import { FaFingerprint, FaBaby, FaHeart, FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const brandColor = "#ffffff";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function MissionAndValues() {
  const { t } = useTranslation();

  const items = [
    { icon: FaFingerprint, label: t("mission.innovation") },
    { icon: FaBaby, label: t("mission.compassion") },
    { icon: FaHeart, label: t("mission.integrity") },
    { icon: FaGlobeAmericas, label: t("mission.globalImpact") },
  ];

  return (
    <section className="w-full px-6 py-16 text-gray-300 bg-gradient-to-b from-[#0a1a2a] to-[#102b45]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              className="text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              <Icon className="text-5xl mx-auto mb-3" style={{ color: brandColor }} />
              <h3
                className="text-xl"
                style={{ color: brandColor, fontFamily: "Kanit, sans-serif", fontWeight: 300 }}
              >
                {label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
