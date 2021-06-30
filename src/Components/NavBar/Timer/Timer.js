import React from "react";
import classes from "./Timer.module.css";

function Timer(props) {
  return (
    <div className={classes.Timer}>
      {props.min > 9 ? props.min : "0" + props.min}:
      {props.sec > 9 ? props.sec : "0" + props.sec}
    </div>
  );
}

export default Timer;
