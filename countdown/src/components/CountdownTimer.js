import React, { useState, useEffect } from "react";
import classes from "./CountdownTimer.module.css";
import { getRemainingTimeUntilMsTimestamp } from "./CountdownTimerUtils"


function CountdownTimer({countdownTimestampMs}) {
  const [state, setState] = useState({
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00"
  });

  const updateRemainingTime = (countdown) => {
    setState(getRemainingTimeUntilMsTimestamp(countdown));
  };
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
      console.log("--I've rerendered---")
    }, 1000);
    return () => clearInterval(intervalId)
  }, [countdownTimestampMs]);


  return (
    <div className={classes.countdown_timer}>
      <span>{state.days}</span>
      <span>days</span>
      <span>{state.hours}</span>
      <span>hours</span>
      <span>{state.minutes}</span>
      <span>minutes</span>
      <span>{state.seconds}</span>
      <span>seconds</span>
    </div>
  );
}

export default CountdownTimer;
