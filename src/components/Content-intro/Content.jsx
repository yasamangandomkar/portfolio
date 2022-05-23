import React, { useContext } from "react";
import { themeContext } from "../Context";
import "./Content.css";
const Content = ({ text1, text2, text3, text4 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="i-name">
      <span style={{ color: darkMode ? "#fff" : "" }}>{text1}</span>
      <span>{text2}</span>
      <br />
      <span>{text3}</span>

      <span>{text4}</span>
    </div>
  );
};

export default Content;
