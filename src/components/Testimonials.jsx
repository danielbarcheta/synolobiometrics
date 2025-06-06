import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section id="clients" className="relative w-full min-h-screen px-6 py-24 overflow-hidden">
      {/* Título alinhado à direita */}
      <div className="w-full flex justify-end mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-right">
          Synolo<sup>®</sup> Team
        </h2>
      </div>

      {/* Grid 2x2 com espaçamento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {feedback.slice(0, 4).map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
