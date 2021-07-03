import React,{memo} from "react";
import classes from "./Logo.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/codingal-logo.svg";
function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logo} className={classes.LogoImg} alt="Codingal" />
      </Link>
    </div>
  );
}
export default memo(Logo);
