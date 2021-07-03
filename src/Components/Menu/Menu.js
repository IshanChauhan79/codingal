import React from "react";
import { createPortal } from "react-dom";
import Backdrop from "../UI/Backdrop/Backdrop";
import classes from "./Menu.module.css";

function Menu(props) {
  return createPortal(
    [
      props.show && <Backdrop clicked={props.backDropClicked} key="backdrop" />,
      <div
        className={classes.Menu}
        style={{ left: props.show ? "0" : "-110%" }}
        key="menu"
      >
        {props.children}
      </div>,
    ],
    document.getElementById("menu")
  );
}

export default Menu;
