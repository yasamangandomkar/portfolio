import React from "react";
import Content from "../Content-intro/Content";
import Html from "@iconscout/react-unicons/icons/uil-html5";
import Css from "@iconscout/react-unicons/icons/uil-css3-simple";
import Reactjs from "@iconscout/react-unicons/icons/uil-react";
import Javascript from "@iconscout/react-unicons/icons/uil-java-script";
import GitHub from "@iconscout/react-unicons/icons/uil-github";
import { motion } from "framer-motion";
import "./Works.css";
const Works = () => {
  return (
    <div className="works">
      <div>
        <Content
          text1="Hy! I Am"
          text2="Yasaman Gandomkar"
          text3="     Frontend Developer with high level of experience in web designing and
       "
          text4=" development, producting the Quality work"
        />
        <button style={{ marginTop: "2rem" }} className="button i-button">
          here me
        </button>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <Html size="80" color="#FFA500" />
          </div>
          <div className="w-secCircle">
            <Css size="80" color="#61DAFB" />
          </div>
          <div className="w-secCircle">
            <Reactjs size="80" color="#61DAFB" />
          </div>{" "}
          <div className="w-secCircle">
            <Javascript size="80" color="#FFD700" />
          </div>
          <div className="w-secCircle">
            <GitHub size="80" color="#000" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
