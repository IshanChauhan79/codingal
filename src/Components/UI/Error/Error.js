import React from "react";
import classes from "./Error.module.css";
import { Link } from "react-router-dom";

function Error(props) {
  return (
    <div className={classes.Error}>
      <div>{props.children}</div>
      <Link to="/" className={classes.Home}>
        Go to HomePage...
      </Link>
    </div>
  );
}

export default Error;
