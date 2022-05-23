import React, { useContext } from "react";
import { themeContext } from "../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="experience">
      <div className="achievement">
        <div className="circle">1+</div>
        <span
          style={{
            color: darkMode ? "#fff" : "",
          }}
        >
          years{" "}
        </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">7+</div>
        <span
          style={{
            color: darkMode ? "#fff" : "",
          }}
        >
          completed{" "}
        </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">0</div>
        <span
          style={{
            color: darkMode ? "#fff" : "",
          }}
        >
          companies{" "}
        </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
