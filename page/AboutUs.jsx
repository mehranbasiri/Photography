import React from "react";
import AboutSection from "../Components/AboutSection";
import ServiceSection from "../Components/ServiceSection";
import FaqSection from "../Components/FaqSection";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  );
};
export default AboutUs;
