import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  const { i18n, t } = useTranslation();

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

  const feedbackLocalized = feedback.map((item) => {
    if (i18n.language === "pt") {
      return {
        ...item,
        content: {
          "feedback-1":
            "Mais de 30 anos de experiência na indústria de tecnologia médica e diagnósticos como fundador, executivo, membro do conselho e investidor; ex-presidente/COO da Berkeley Heartlab (adquirida pela Quest Labs)",
          "feedback-2":
            "Mais de 25 anos como executivo, consultor e investidor em ciências da vida; fundador/CEO do ChinaBio Group em Xangai e cofundador/presidente da BioPacific Investors; liderou diversas transações de financiamento e aquisição; início de carreira na PwC e EY/Capgemini",
          "feedback-3":
            "Mais de 25 anos em pesquisa, design e desenvolvimento de sistemas ópticos de imagem, sensores e lasers para aplicações médicas, militares e comerciais; cofundador da Ion Biometrics; anteriormente cientista principal e engenheiro-chefe em diversas empresas de imagem",
          "feedback-4":
            "Professor assistente de Doenças Infecciosas e Saúde Global na UCSD e no Qualcomm Institute, e Diretor do Design Lab Center for Health; cofundador da Ion Biometrics; inventor do Synolo® Neo",
          "feedback-5":
            "Rafael Cury Lucchesi",
        }[item.id],
      };
    }

    if (i18n.language === "es") {
      return {
        ...item,
        content: {
          "feedback-1":
            "Más de 30 años de experiencia en la industria de tecnología médica y diagnósticos como fundador, ejecutivo, miembro de la junta e inversor; ex Presidente/COO de Berkeley Heartlab (adquirida por Quest Labs)",
          "feedback-2":
            "Más de 25 años como ejecutivo, asesor e inversor en ciencias de la vida; fundador/CEO de ChinaBio Group en Shanghái y cofundador/presidente de BioPacific Investors; lideró numerosas transacciones de financiamiento y adquisición; carrera inicial en PwC y EY/Capgemini",
          "feedback-3":
            "Más de 25 años en investigación, diseño y desarrollo de sistemas de imagen óptica, sensores y láseres para aplicaciones médicas, militares y comerciales; cofundador de Ion Biometrics; anteriormente científico principal e ingeniero jefe en diversas empresas de imagen",
          "feedback-4":
            "Profesor asistente de Enfermedades Infecciosas y Salud Global en la UCSD y el Qualcomm Institute, y Director del Design Lab Center for Health; cofundador de Ion Biometrics; inventor de Synolo® Neo",
          "feedback-5":
            "Rafael Cury Lucchesi",
        }[item.id],
      };
    }

    return item; // fallback para EN
  });

  return (
    <section id="clients" className="w-full px-6 pt-10 pb-24 overflow-hidden">
      <div className="w-full flex justify-center mt-1 mb-16" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-700">
          {t("team.title", "Synolo")}<sup>®</sup> {t("team.subtitle", "Team")}
        </h2>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-5 gap-6 max-w-7xl mx-auto" data-aos="fade-up">
        {feedbackLocalized.map((card, idx) => (
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
