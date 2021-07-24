import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const UseScroll = () => {
  const controls = useAnimation();
  const [element, View] = useInView({ threshold: 0.3 });
  if (View) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
