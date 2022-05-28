import React, { useState } from "react";
import classes from "./CountdownTimer.module.css";

// const defaultRemainingTime = {
//   seconds: '00',
//   minutes: '00',
//   hours: '00',
//   days: '00'
// }

function CountdownTimer() {
  const [state, setState] = useState({
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
  });

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
