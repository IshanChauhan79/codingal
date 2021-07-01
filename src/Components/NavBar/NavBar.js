import React from "react";
import classes from "./NavBar.module.css";
import logo from "../../assets/images/codingal-logo.svg";
import RedButton from "../UI/RedButton/RedButton";
import Timer from "./Timer/Timer";
import NavigationItems from "./NavigationItems/NavigationItems";
import {Link} from 'react-router-dom'

function NavBar(props) {
  const endClass = props.showEndClass ? (
    <RedButton clicked={props.endClassClicked}>End Class</RedButton>
  ) : null;
  const timer = props.showEndClass ? (
    <Timer min={props.timer.min} sec={props.timer.sec} />
  ) : null;
  return (
    <div className={classes.NavBar}>
      <div>
        <Link to="/"><img src={logo} className={classes.LogoImg} alt="Codingal" />
        </Link>
        
      </div>
      <div className={classes.Navigations}>
        {timer}
        {endClass}
        <NavigationItems />
      </div>
    </div>
  );
}

export default NavBar;
