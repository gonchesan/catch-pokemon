import React, { useState, useEffect } from "react";
import { NumbersWrapper, StopwatchWrapper } from "./Stopwatch.style";

const Stopwatch = () => {
  const [time, setTime] = useState(30000);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setRunning(false);
            console.log("paro");
            return prevTime;
          }
          return prevTime - 10;
        });
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);
  return (
    <StopwatchWrapper>
      <NumbersWrapper>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        <span>"</span>
      </NumbersWrapper>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </StopwatchWrapper>
  );
};

export default Stopwatch;
