import { useState } from "react";
import styles from "./style";
import { IoMailOutline } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";

import {
  Challange,
  Footer,
  Navbar,
  Hero,
} from "./components";

import Solution from "./components/Solution";
import Innovation from "./components/Innovation";

const App = () => {
  return (
    <div className="bg-primary-gradient w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} relative z-20`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className="relative">
        <Hero />
      </div>

      <Challange />

      {/* Renderiza ambos os componentes permanentemente */}
      <Solution />
      <Innovation />

          <Footer />


    </div>
  );
};

export default App;