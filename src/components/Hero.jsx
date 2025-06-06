import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import babyImage from "../assets/baby.png";
import { MdOutlineCheckCircle } from "react-icons/md";

// Imagens horizontais
import scroll1 from "../assets/partner1.png";
import scroll2 from "../assets/partner2.png";
import scroll3 from "../assets/partner3.png";
import scroll4 from "../assets/partner4.svg";
import scroll5 from "../assets/partner5.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const scrollImages = [scroll1, scroll2, scroll3, scroll4, scroll5];

  return (
    <section id="home" className="relative w-full h-[80vh] overflow-hidden pt-16"> {/* Adicionei pt-16 para espaço da navbar */}
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="w-full h-full brightness-110 md:brightness-100"
          style={{
            backgroundImage: `url(${babyImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Conteúdo principal */}
      <div
        className="relative z-10 w-full h-full flex flex-col md:flex-row"
        data-aos="fade-up"
      >
        <div className="flex-1 flex flex-col justify-center md:pl-24 pl-6 min-h-[60vh]">
          <div className="space-y-3 text-center md:text-left">
            <h1 className="font-poppins font-bold text-[clamp(48px,8vw,84px)] leading-tight text-gray-900">
              Total <br className="sm:block hidden" />
              <span className="text-gradient">biometrics</span>
            </h1>
            <h1 className="font-poppins font-bold text-[clamp(44px,7.5vw,76px)] leading-tight text-gray-900">
              from birth
            </h1>
          </div>

          {/* Certificação substituindo citação */}
          <div className="mt-10 px-4 md:px-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 text-gray-800 font-semibold text-[1.1rem] md:text-[1.3rem]">
              <MdOutlineCheckCircle className="text-[#5ce6b1db] text-[2rem]" />
              <span>FBI's PIV Single Finger Capture Device Certification</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carrossel de parceiros - ajustado para ficar abaixo da navbar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[20] w-[90%] md:w-[60%] h-[30px] bg-transparent flex justify-center items-center gap-8">
        {scrollImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`partner-${idx}`}
            className="h-[25px] w-auto object-contain opacity-90 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;