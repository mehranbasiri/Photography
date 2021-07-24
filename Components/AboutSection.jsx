import React from "react";
import home from "../img/home.jpg";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
const AboutSection = () => {
  return (
    <div className="about">
      <div className="description">
        <motion.div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnim}>ما در اینجا </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              <span>رویا</span>های شمارا
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>خواهیم ساخت</motion.h2>
          </div>
        </motion.div>

        <motion.p variants={fade}>
          انجام کلیه امور فیلمبرداری و عکسبرداری از مجالس و مهمانی ها پذیرفته
          میشود
        </motion.p>

        <motion.button variants={fade}>ارتباط با ما</motion.button>
      </div>
      <div className="image">
        <motion.img variants={photoAnim} src={home} alt="title img" />
      </div>
    </div>
  );
};

export default AboutSection;
