import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  const [expandedIds, setExpandedIds] = useState([]);

  const handleHover = (id) => {
    if (!expandedIds.includes(id)) {
      setExpandedIds((prev) => [...prev, id]);
    }
  };

  return (
    <section id="clients" className="w-full px-6 pt-10 pb-24 overflow-hidden">
      <div className="w-full flex justify-center mt-1 mb-16" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-700">
          Synolo<sup>®</sup> Team
        </h2>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-5 gap-6 max-w-7xl mx-auto" data-aos="fade-up">
        {feedback.slice(0, 5).map((card, idx) => (
          <div key={card.id} data-aos="fade-up" data-aos-delay={idx * 100}>
            <FeedbackCard
              {...card}
              expanded={expandedIds.includes(card.id)}
              onHover={() => handleHover(card.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
