import React, { useState } from "react";
import classes from "./NavBar.module.css";
import logo from "../../assets/images/codingal-logo.svg";
import RedButton from "../UI/RedButton/RedButton";
import Timer from "./Timer/Timer";
import NavigationItems from "./NavigationItems/NavigationItems";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";

function NavBar(props) {
  const [showMenu, setShowMenu] = useState(false);
  const endClass = props.showEndClass ? (
    <RedButton clicked={props.endClassClicked}>End Class</RedButton>
  ) : null;
  const timer = props.showEndClass ? (
    <Timer min={props.timer.min} sec={props.timer.sec} />
  ) : null;
  const menuClicked = () => {
    setShowMenu((prev) => !prev);
  };
  const menu = (
    <Menu show={showMenu} backDropClicked={menuClicked}>
      <div className={classes.MenuClose} onClick={menuClicked}>
        X
      </div>
      <div className={classes.MenuTImer} onClick={menuClicked}>
        {timer}
        {endClass}
      </div>
      <div onClick={menuClicked}>
        <NavigationItems />
      </div>
    </Menu>
  );

  return (
    <div className={classes.NavBar}>
      <div>
        <Link to="/">
          <img src={logo} className={classes.LogoImg} alt="Codingal" />
        </Link>
      </div>
      <div className={classes.Navigations}>
        {timer}
        {endClass}
        <div className={classes.NavLink}>
          <NavigationItems />
        </div>
      </div>
      <div className={classes.Menu} onClick={menuClicked}>
        <img
          src="https://img.icons8.com/material-outlined/24/ff5842/menu--v3.png"
          alt="Menu"
        />
      </div>
      {menu}
    </div>
  );
}

export default NavBar;
