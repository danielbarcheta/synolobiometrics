import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypingEffect = ({ text, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <>{displayedText}</>;
};

const FeedbackCard = ({ content, name, title, img, expanded, onHover }) => {
  return (
    <motion.div
      onMouseEnter={onHover}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative flex flex-col items-center text-center cursor-default transition-all duration-700 ease-in-out"
    >
      <div className="relative w-40 h-40 sm:w-44 sm:h-44 mb-4">
        {expanded && (
          <span
            className="absolute rounded-full"
            style={{
              width: "100%",
              height: "100%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: `
                0 6px 12px 2px rgba(51, 207, 171, 0.4),
                0 12px 24px 4px rgba(120, 130, 140, 0.2),
                0 20px 40px 8px rgba(100, 110, 120, 0.1)
              `,
              filter: "blur(12px)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
        )}

        <div
          className={`relative w-full h-full rounded-full overflow-hidden transform transition-transform duration-700 ease-in-out
            ${expanded ? "scale-105 z-10 filter-none" : "z-10 filter grayscale(1) sepia(1) hue-rotate(90deg) saturate(0.5) brightness(1.1)"}
          `}
        >
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      <h4 className="text-gray-600 font-semibold text-lg">{name}</h4>
      <p className="text-gray-500 text-sm">{title}</p>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-4 bg-white text-gray-700 text-sm leading-relaxed px-4 pb-4 pt-3 rounded-b-xl max-w-sm border-t-0"
          style={{ boxShadow: "none" }}
        >
          <TypingEffect text={content} speed={20} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default FeedbackCard;
