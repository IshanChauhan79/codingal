import React from "react";
import classes from "./NavigationItems.module.css";
import { Link } from "react-router-dom";

function NavigationItems() {
  return (
    <div className={classes.NavigationItems}>
      <Link to="/passengers">
        <div className={classes.NavigationItem}>Passengers</div>
      </Link>
    </div>
  );
}

export default React.memo(NavigationItems);
