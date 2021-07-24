import React from "react";
import ToggleFaq from "../ToggleFaq";
import { AnimateSharedLayout, motion } from "framer-motion";
import { UseScroll } from "./UseScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = UseScroll();
  return (
    <motion.div
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
      className="faq"
    >
      <h2>
        سوالات پر تکرار <span>شما</span>
      </h2>
      <AnimateSharedLayout>
        <ToggleFaq title="چگونه میتوان وقت رزرو کرد">
          <div className="answer">
            <p>ابتدا ثبت نام کرده سپس وارد گزینه رزرو شوید</p>

            <p>
              برای ثبت نام در دوره ها نیز میتوانید ا طریق صفحه ارتباط با ما ثبت
              نام کنید
            </p>
          </div>
        </ToggleFaq>
        <ToggleFaq title="آیا شما مدارک معتبر دارید؟">
          <div className="answer">
            <p>بله تمامی مدارک توسط نهاد های مربوطه تایید شده است</p>
            <p>
              برای ثبت نام در دوره ها نیز میتوانید ا طریق صفحه ارتباط با ما ثبت
              نام کنید
            </p>
          </div>
        </ToggleFaq>
        <ToggleFaq title="شما فیلم بردار خانم هم دارید؟">
          <div className="answer">
            <p>بله کادر ما شامل تعدادی خانم و اقا کاملا حرفه ای و مجرب استد</p>
            <p>
              برای ثبت نام در دوره ها نیز میتوانید ا طریق صفحه ارتباط با ما ثبت
              نام کنید
            </p>
          </div>
        </ToggleFaq>
        <ToggleFaq title="?چگونه میتوان وقت رزرو کرد">
          <div className="answer">
            <p>ابتدا ثبت نام کرده سپس وارد گزینه رزرو شوید</p>
            <p>
              برای ثبت نام در دوره ها نیز میتوانید ا طریق صفحه ارتباط با ما ثبت
              نام کنید
            </p>
          </div>
        </ToggleFaq>
      </AnimateSharedLayout>
    </motion.div>
  );
};
export default FaqSection;
