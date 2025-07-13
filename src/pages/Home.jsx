import React from "react";
import { Hero, Challange, Footer, Navbar } from "../components";
import Solution from "../components/Solution";
import Innovation from "../components/Innovation";
import styles from "../style";
import NatureHighlight from "../components/NatureHighlight";

const Home = () => {
  return (
    <div className="bg-primary-gradient w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} relative z-20`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div>

            <div className="relative z-20">
<Navbar />

      </div>

      <div className="relative">
        <Hero />
      </div>

      <Challange />
      <Solution />
      <Innovation />
      <NatureHighlight/>
      <Footer />
      
    </div>
  );
};

export default Home;
