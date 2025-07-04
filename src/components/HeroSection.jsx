import { motion } from "framer-motion";
import neohand from "../assets/neohand.png";
import img2017 from "../assets/2017.webp";

export function HeroSection({ hero }) {
  return (
    <section
      className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden font-spaceGrotesk"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <img
          src={neohand}
          alt="neohand"
          className="w-full h-full object-cover transform translate-x-0 sm:translate-x-5 md:translate-x-10 lg:translate-x-0 transition-transform duration-500 ease-in-out"
          style={{ transformOrigin: "left center" }}
        />
      </div>

      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none z-10"
        style={{
          background: `radial-gradient(
            circle at top right,
            rgba(0, 0, 0, 0.15) 0%,
            rgba(0, 0, 0, 0.1) 30%,
            rgba(0, 0, 0, 0.05) 55%,
            transparent 75%
          )`,
        }}
      />

      <div className="relative z-20 w-full pl-6 pr-8 sm:pr-16 md:pr-32 lg:pr-40 flex flex-col items-end">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-right"
        >
          <h1
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold"
            style={{ color: "#1e293b" }}
          >
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 font-semibold text-[#0a2540]">
            {hero.subtitle}
          </p>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-800 font-medium">
            {hero.description}
          </p>

          <a
            href="https://gatesopenresearch.org/articles/3-1477/v2"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-20 inline-flex items-center space-x-3 cursor-pointer group"
          >
            <img
              src={img2017}
              alt="Gates Open Research"
              className="w-14 h-14 rounded-full object-cover flex-shrink-0"
            />
            <span
              className="text-black font-bold text-lg md:text-xl hover:underline"
              style={{ lineHeight: 1.2 }}
            >
              Check out the Gates Open Research article on Neo
            </span>
            <svg
              className="w-6 h-6 text-black transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
