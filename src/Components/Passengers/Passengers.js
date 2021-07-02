import React, { useState, useRef, useCallback } from "react";
import classes from "./Passengers.module.css";
import usePassengers from "../../hooks/usePassengers";
import Passenger from "./Passenger/Passenger";
import Spinner from "../UI/Spinner/Spinner";
import Error from "../UI/Error/Error";

function Passengers() {
  const size = 10; //can use useState to make size variable or change the value of size
  const [pageNumber, setPageNumber] = useState(0);

  const { passengers, loading, error, hasMore, firstLoad } = usePassengers(
    pageNumber,
    size
  );
  const observer = useRef();
  const lastPassengerRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  const passengersList = passengers.map((passenger, index) => {
    let element = [
        <Passenger passenger={passenger}  key={passenger._id} />
    ];
    if (passengers.length === index + 1) {
      element = [
        ...element,
        <div
          className={classes.Spinner}
          ref={lastPassengerRef}
          key={passenger._id + "ksdhf"}
        >
          <Spinner />
        </div>,
      ];
    }
    return element;
  });

  return (
    <div className={classes.Passengers}>
      {passengersList}
      {error && <Error>Something Went Wrong</Error>}
      {firstLoad && (
        <div className={classes.Spinner}>
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default Passengers;
