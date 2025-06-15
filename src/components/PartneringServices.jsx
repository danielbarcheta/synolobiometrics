import { useState } from "react";
import { Link } from "react-router-dom";

export default function PartneringSection() {
  const [showServices, setShowServices] = useState(false);

  return (
    <section className="w-full bg-[#f3f3f3] py-16 px-6 sm:px-10 md:px-20 lg:px-32 text-[#003366]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-12 min-h-[300px] transition-all">
          {/* Lado Esquerdo */}
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold text-[#33cfabd5]">
              Partnering Services
            </h2>

            <div className="text-lg leading-relaxed space-y-6 max-w-3xl">
              <h3 className="text-2xl font-semibold">
                Synolo<sup>®</sup> Solutions Provider Program (SSP™)
              </h3>

              <p>
                If you are a systems integrator providing turnkey biometric identification solutions to government agencies, and you need to capture and match newborns, infants and young children, we have the solution you need.
              </p>
            </div>

            {/* Botão abaixo do texto, alinhado à esquerda */}
            <div>
              <button
                onClick={() => setShowServices(!showServices)}
                className="bg-white text-[#003366] font-medium text-sm px-4 py-1.5 rounded-full shadow-sm hover:bg-gray-100 transition"
              >
                {showServices ? "Hide Services ✕" : "Our Services ➔"}
              </button>
            </div>
          </div>

          {/* Linha divisória vertical com transição suave */}
          <div
            className={`hidden lg:flex transition-all duration-500 ${
              showServices ? "w-px bg-[#003366]/50 mx-6" : "w-0"
            }`}
          />

          {/* Lado Direito com animação */}
          <div
            className={`flex-1 overflow-hidden transition-all duration-500 ease-in-out ${
              showServices
                ? "opacity-100 max-h-[1000px] mt-6 lg:mt-0"
                : "opacity-0 max-h-0 pointer-events-none"
            }`}
          >
            <ul className="text-[#003366] text-base leading-loose list-disc list-inside space-y-4">
              <li>Trial/Rollout project planning</li>
              <li>Deployment support and training</li>
              <li>OEM systems integration support</li>
              <li>AI-based data and image analytics</li>
              <li>Synolo<sup>®</sup> Neo device customization</li>
              <li>Synolo<sup>®</sup> SDK customization and integration</li>
              <li>Synolo<sup>®</sup> capture station customization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
