import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import baby1 from '../assets/finger1.png';
import baby2 from '../assets/finger2.png';
import icon from '../assets/icon-synolo.png';

const Innovation = () => {
  const images = [baby1, baby2];
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoPlay]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
    setAutoPlay(false);
    clearInterval(intervalRef.current);
  };

  const topics = [
    "The Synolo® Neo incorporates patented imaging technology that utilizes the best of both contact and non-contact fingerprint readers to ensure the highest quality images of even the smallest newborn fingers. Our technology prevents the distortion caused by compressing a soft, infant finger against a glass platen, while ensuring the finger is positioned precisely to optimize image quality.",
    "Combined with Synolo's high resolution optics and proprietary image processing and age-correction algorithms, the Synolo® Neo not only ensures accurate infant fingerprint capture and identification but is also the only scientifically-proven solution to provide life-long 1:N matching as the baby grows to become a productive adult citizen."
  ];

  return (
    <section className="w-full px-6 md:px-20 py-24 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-10 items-center" data-aos="fade-right">
          <div className="relative w-[290px] md:w-[450px] aspect-[4/3]">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Fingerprint Detail ${idx + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-2xl transition-opacity duration-1000 ${currentImage === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))}
            <div className="absolute -top-4 -left-4 w-[110%] h-[110%] bg-gradient-to-br from-[#5ce6b119] to-[#33cfab33] rounded-3xl blur-[80px] -z-20" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-3 h-3 rounded-full ${currentImage === idx ? 'bg-white' : 'bg-white/50'} transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-900/30"></div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-10 items-center text-center md:items-start md:text-left" data-aos="fade-left">
          <div className="flex items-center gap-3">
            <img src={icon} alt="Synolo Icon" className="w-8 h-8" />
            <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-extrabold text-gray-900 leading-tight">
              Synolo® Technology
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {topics.map((topic, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <p className="text-[clamp(0.9rem,1.6vw,1rem)] font-semibold text-gray-700 leading-relaxed">
                  {topic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
