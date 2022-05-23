import React, { useContext } from "react";
import { themeContext } from "../Context";
import "./FlootingDiv.css";
const FloatingDiv = ({ image, title1, title2 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className="floatingdiv">
        <img src={image} alt="" />
        <span style={{ color: darkMode ? "#000" : "" }}>
          {title1}
          <br />
          {title2}
        </span>
      </div>
    </div>
  );
};

export default FloatingDiv;
