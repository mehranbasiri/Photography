import React from "react";
import CameraIcon from "@material-ui/icons/Camera";
import TimerIcon from "@material-ui/icons/Timer";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PeopleIcon from "@material-ui/icons/People";
import home2 from "../img/home2.jpg";

import { scrollReveal } from "../animation";
import { motion } from "framer-motion";
import { UseScroll } from "./UseScroll";
const ServiceSection = () => {
  const [element, controls] = UseScroll();
  return (
    <motion.div
      animate={controls}
      initial="hidden"
      variants={scrollReveal}
      ref={element}
      className="service"
    >
      <div className="description">
        <h2>
          با بهترین <span>کیفیت </span>
          در اختیار شما
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <i>
                <TimerIcon fontSize="large" />
              </i>
              <h3>رزرو سریع</h3>
            </div>
            <p>دیگر نیازی نیس از چند ماه قبل دنبال فیلمبردار باشید</p>
          </div>
          <div className="card">
            <div className="icon">
              <i>
                <PeopleIcon fontSize="large" />
              </i>
              <h3>کادری با تجربه</h3>
            </div>
            <p>
              گروه ترنج با افتخار اعلام میکند در ایران دارای بهترین کادر فیلم
              برداری و عکس برداری می باشد
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <i>
                <CameraIcon fontSize="large" />
              </i>
              <h3>با حضور بهترین اساتید</h3>
            </div>
            <p>
              گروه ترنج در نظر دارد افراد علاقه مند در این زمینه را به صورت کار
              اموز به اختیار بگیرد
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <i>
                <AttachMoneyIcon fontSize="large" />
              </i>
              <h3>با کمترین هزینه</h3>
            </div>
            <p>دیگر نیازی نیس نگران هزینه های گزاف فیلم برداری باشید</p>
          </div>
        </div>
      </div>
      <div>
        <img className="serviceImg" src={home2} alt="second img" />
      </div>
    </motion.div>
  );
};
export default ServiceSection;
