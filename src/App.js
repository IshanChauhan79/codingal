import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import classes from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import EndClassModal from "./Components/EndClassModal/EndClassModal";
import HomePage from "./Components/HomePage/HomePage";
import Passengers from "./Components/Passengers/Passengers";
// import CSSTransition from "react-transition-group/CSSTransition";

import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router";

function App() {
  const [timer, setTimer] = useState({ min: 10, sec: 0 });
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const interval = useRef();

  // calculating timer --------------------------------------
  useEffect(() => {
    interval.current = setInterval(() => {
      let min = timer.min;
      let sec = timer.sec;
      if (min === 0 && sec === 0) {
        return;
      }
      if (sec === 0) {
        sec = 59;
        min = min - 1;
      } else {
        sec = sec - 1;
      }
      setTimer({ min: min, sec: sec });
    }, 1000);
    return () => clearInterval(interval.current);
  }, [timer.min, timer.sec, location.pathname]);

  // whnever route changers restart the timer when back to home page
  useEffect(() => {
    if (location.pathname === "/") {
      setTimer({ min: 10, sec: 0 });
    } else {
      clearInterval(interval.current);
    }
  }, [location.pathname]);

  // clear timer ----------------------
  const clearTimer = () => {
    clearInterval(interval.current);
    setShowModal(false);
  };
  const showModalHandler = useCallback(() => {
    setShowModal((prev) => !prev);
  },[]);

  const modal = useMemo(()=>(
    <EndClassModal
      showModal={showModal}
      modalClose={showModalHandler}
      clearTimer={clearTimer}
    />
  ),[showModal,showModalHandler]);

  return (
    <div className={classes.App}>
      <Switch>
        <Route path="/" exact>
          <NavBar
            showEndClass
            timer={timer}
            endClassClicked={showModalHandler}
          />
          {modal}
          <HomePage />
        </Route>
        <Route path="/passengers">
          <NavBar />
          <Passengers />
        </Route>

        <Route path="/">
          <NavBar />
          <HomePage />
          <div className={classes.NotFound}>404 Page not Found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
