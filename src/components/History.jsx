import React from "react";
import { useInView } from "react-intersection-observer";
import { timelineData } from "../constants"; // Importando os dados dos eventos

const History = () => {
  return (
    <div className="timeline-container">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const TimelineItem = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Só ativa a animação uma vez
    threshold: 0.5, // Quando 50% do item estiver na tela
  });

  return (
    <div
      ref={ref}
      className={`timeline-item ${inView ? "fade-in" : ""}`}
    >
      <div className="timeline-image">
        {item.imagem && <img src={item.imagem} alt={item.titulo} />}
      </div>
      <div className="timeline-content">
        <h3>{item.ano} - {item.titulo}</h3>
        <p>{item.conteudo}</p>
      </div>
    </div>
  );
};

export default History;
