import React from "react";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
const ContactUs = () => {
  return (
    <motion.div
      className="contactStyle"
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <div className="contact-Title">
        <div className="hide">
          <motion.h2 variants={titleAnim}>ارتباط با ما</motion.h2>
        </div>
      </div>
      <div>
        <motion.div className="social" variants={titleAnim}>
          <h2>شماره تماس :09384029498</h2>
          <div className="circle"></div>
        </motion.div>
        <motion.div className="social" variants={titleAnim}>
          <h2> mehranbsl78@gmail.com :ایمیل</h2>
          <div className="circle"></div>
        </motion.div>
        <motion.div className="social" variants={titleAnim}>
          <h2>نشانی : کرج کمالشهر بلوار شهرداری </h2>
          <div className="circle"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default ContactUs;
