import React from "react";
import AboutHero from "../components/AboutHero";
import { Footer, Navbar, Testimonials } from "../components";
import Timeline from "../components/Timeline";
import PartneringServices from "../components/PartneringServices";
import MissionAndValues from "../components/MissionAndValues";
import PartnersShowcase from "../components/PartnersShowcase";

const About = () => {
  return (
    <>

    <Navbar logoWhite={true} />
   <AboutHero/>
    <Timeline/>
        <PartnersShowcase/>
   <Testimonials/>
      
   <Footer/>
   </>
  );
};

export default About;
