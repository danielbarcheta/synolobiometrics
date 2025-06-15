import React from "react";
import AboutHero from "../components/AboutHero";
import { Footer, Testimonials } from "../components";
import Timeline from "../components/Timeline";
import PartneringServices from "../components/PartneringServices";
import MissionAndValues from "../components/MissionAndValues";
import TechnologyHighlight from "../components/TechnologyHighlight";

const About = () => {
  return (
    <>
   <AboutHero/>
   <MissionAndValues/>
    <Timeline/>
    <TechnologyHighlight/>
   <Testimonials/>
   <Footer/>
   </>
  );
};

export default About;
