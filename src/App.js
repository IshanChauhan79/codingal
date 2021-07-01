import React, { useEffect, useState, useRef } from "react";
import classes from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import EndClassModal from "./Components/EndClassModal/EndClassModal";

function App() {
  const [timer, setTimer] = useState({ min: 10, sec: 0 });
  // const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const interval = useRef();

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
  }, [timer.min, timer.sec]);
  const clearTimer = () => {
    clearInterval(interval.current);
    setShowModal(false);
  };
  const showModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      <NavBar timer={timer} endClassClicked={showModalHandler} />
      {showModal ? (
        <EndClassModal modalClose={showModalHandler} clearTimer={clearTimer} />
      ) : null}
    </div>
  );
}

export default App;
