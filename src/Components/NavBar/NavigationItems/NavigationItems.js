import React from "react";
import classes from "./NavigationItems.module.css";
import { Link } from "react-router-dom";

function NavigationItems(props) {
  return (
    <div className={classes.NavigationItems}>
      <Link to="/passengers">
        <div className={classes.NavigationItem}>Passengers</div>
      </Link>
    </div>
  );
}

export default NavigationItems;
