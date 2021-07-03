import React from "react";
// import classes from "./HomePage.module.css";
import codingal from "../../assets/images/codingal-logo.svg";

function Button(props) {
  return (
    <img
      src={codingal}
      alt="Codingal"
      style={{ width: "min(70%,50rem)", marginTop: "10rem", minWidth: "20rem" }}
    ></img>
  );
}

export default Button;
