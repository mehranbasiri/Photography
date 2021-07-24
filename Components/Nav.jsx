import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      <h1>
        <Link id="Logo" to="/">
          ترنج
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">خانه</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
            className="NavItem-Line"
          ></motion.div>
        </li>
        <li>
          <Link to="/work">نمونه کار </Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
            className="NavItem-Line"
          ></motion.div>
        </li>
        <li>
          <Link to="/contact">ارتباط باما</Link>
          <motion.div
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
            className="NavItem-Line"
          ></motion.div>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
