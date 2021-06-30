import React, { useEffect, useState, useCallback } from "react";
import Layout from "./Components/Layout/Layout";
import classes from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [timer, setTimer] = useState({ min: 10, sec: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
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
    return () => clearInterval(interval);
  }, [timer.min, timer.sec]);
  // console.log(timer);
  return (
    <div className="App">
      <NavBar timer={timer} />
    </div>
  );
}

export default App;
