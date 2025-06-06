import { motion } from "framer-motion";

const FeedbackCard = ({ content, name, title, img }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-sm transition-all duration-300"
    style={{
      background: 'rgba(255, 255, 255, 0.04)',
      boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.2)',
      borderRadius: '1rem',
    }}
  >
    {/* Fade-like border effect with gradient overlay */}
    <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
      border: '1px solid transparent',
      background: 'linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0))',
      maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.1))',
      WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.1))',
      zIndex: 1
    }} />

    <img
      src={img}
      alt={name}
      className="relative z-10 w-24 h-24 object-cover rounded-full mb-5 border border-white/10 shadow-sm"
    />
    <h4 className="relative z-10 text-neutral-100 font-semibold text-lg">{name}</h4>
    <p className="relative z-10 text-neutral-300 font-medium text-sm mb-4">
      {title}
    </p>
    <p className="relative z-10 text-neutral-200 font-normal text-[15px] leading-relaxed">
      {content}
    </p>
  </motion.div>
);

export default FeedbackCard;
