import React, { useState } from "react";
import classes from "./NavBar.module.css";
import RedButton from "../UI/RedButton/RedButton";
import Timer from "./Timer/Timer";
import NavigationItems from "./NavigationItems/NavigationItems";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

//display the navigation bar and the menu for screen and
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
      <Logo />
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
      <Logo />
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
