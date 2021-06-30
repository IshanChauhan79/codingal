import React from "react";
import classes from "./NavBar.module.css";
import logo from "../../assets/images/codingal-logo.svg";
import RedButton from "../UI/RedButton/RedButton";
import Timer from "./Timer/Timer";
import NavigationItems from './NavigationItems/NavigationItems';
function NavBar(props) {
  const buttonClicked = () => {
    console.log("hello");
  };
  return (
    <div className={classes.NavBar}>
      <div>
        <img src={logo} className={classes.LogoImg} alt="Codingal" />
      </div>
      <div className={classes.Navigations}>
        <Timer min={props.timer.min} sec={props.timer.sec} />
        <RedButton clicked={buttonClicked}>End Class</RedButton>
        <NavigationItems/>
      </div>
    </div>
  );
}

export default NavBar;
