import React from "react";
import Card from "../Card/Card";
import Content from "../Content-intro/Content";
import HeartEmoji from "../../assets/image/heartemoji.png";
import Glasses from "../../assets/image/glasses.png";
import Humble from "../../assets/image/humble.png";
import resome from "./resome.pdf";
import "./Services.css";
import { motion } from "framer-motion";
const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services">
      <div className="awesome">
        <Content
          text1="My Awesome"
          text2="services"
          text3="     Frontend Developer with high level of experience in web designing and
          "
          text4=" development, producting the Quality work"
        />
        <a href={resome} download>
          <button style={{ marginTop: "2rem" }}>download CV </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Lorem ispum dummy text are usually use in section"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={
              "Html, Css, JavaScript, React , redux ,bootstarp ,tailwind , rest api , responsive design"
            }
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
