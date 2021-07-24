import React from "react";
//import img
import athlete from "../img/athlete.jpg";
import GoodTime from "../img/GoodTime.jpg";
import TheRacer from "../img/TheRacer.jpg";
import { Link } from "react-router-dom";
//Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  swoopAdoop,
} from "../animation";
import { UseScroll } from "../Components/UseScroll";
import ScrollTop from "../Components/ScrollTop";
const OurWork = () => {
  const [element, controls] = UseScroll();
  const [element2, controls2] = UseScroll();
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="work"
      style={{ background: "#fff" }}
    >
      <div className="movie">
        <motion.h1 variants={fade}>The athlete</motion.h1>
        <motion.div v variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <div className="hide">
            <motion.img variants={photoAnim} src={athlete} alt="athlete img" />
          </div>
        </Link>
      </div>
      <motion.div
        ref={element}
        animate={controls}
        initial="hidden"
        variants={swoopAdoop}
        className="movie"
      >
        <h1>The Racer</h1>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={TheRacer} alt="athlete img" />
        </Link>
      </motion.div>
      <motion.div
        variants={fade}
        animate={controls2}
        initial="hidden"
        ref={element2}
        className="movie"
      >
        <h1>Good Times</h1>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={GoodTime} alt="athlete img" />
        </Link>
      </motion.div>
      <ScrollTop />
    </motion.div>
  );
};
export default OurWork;
