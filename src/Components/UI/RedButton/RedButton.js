import React from "react";
import classes from "./RedButton.module.css";

function Button(props) {
  return <button className={classes.Button} onClick={props.clicked}>{props.children}</button>;
}

export default Button;
