import { motion } from "framer-motion";

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
      <div
        className={`w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden mb-4 transform transition-transform duration-700 ease-in-out
          ${expanded ? "scale-105" : "group-hover:scale-105"}
        `}
      >
        <img
          src={img}
          alt={name}
          className={`w-full h-full object-cover grayscale transition-all duration-700 ease-in-out
            ${expanded ? "grayscale-0" : "group-hover:grayscale-0"}
          `}
        />
      </div>

      <h4 className="text-gray-600 font-semibold text-lg">{name}</h4>
      <p className="text-gray-500 text-sm">{title}</p>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-4 bg-white text-gray-700 text-sm leading-relaxed px-4 pb-4 pt-3 rounded-b-xl shadow-sm max-w-sm border-t-0"
        >
          {content}
        </motion.div>
      )}
    </motion.div>
  );
};

export default FeedbackCard;
