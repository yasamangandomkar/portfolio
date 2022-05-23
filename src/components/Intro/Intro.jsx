import React from "react";
import vectore1 from "../../assets/image/Vector1.png";
import vectore2 from "../../assets/image/Vector2.png";
import thumbup from "../../assets/image/thumbup.png";
import crown from "../../assets/image/crown.png";
import glassesimoji from "../../assets/image/glasses.png";
import boy from "../../assets/image/boy.png";
import GitHub from "../../assets/image/github.png";
import LinkedIn from "../../assets/image/linkedin.png";
import Instagram from "../../assets/image/instagram.png";
import { motion } from "framer-motion";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Content from "../Content-intro/Content";
import "./Intro.css";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div>
          {/* yahan change hy darkmode ka */}
          <Content
            text1="Hi! I Am"
            text2="Yasaman Gandomkar"
            text3="a front-end developer ,agraduate of software engineering.
            i love programming and develope  front-end web Apllications with ReactJs,Redux and i do that for more 9 month.
            i am happy programmer.

       "
            text4=" see My Skills and my Resume . . ."
          />
          <button style={{ marginTop: "2rem" }} className="button i-button">
            Hire me
          </button>
        </div>
        <div className="i-icons">
          <img src={GitHub} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={vectore1} alt="" />
        <img src={vectore2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-14%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
          className="floating-div"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={crown} title1="developer" title2="web" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "-3rem" }}
          whileInView={{ left: "2rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} title1="Best" title2="Design" />
        </motion.div>
        <div className="blur"></div>
        <div
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            left: "-9rem",
            height: "11rem",
          }}
          className="blur"
        ></div>
      </div>
    </div>
  );
};

export default Intro;
