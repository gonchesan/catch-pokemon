import { useState, useEffect } from "react";

//* Styles
import {
  NumbersWrapper,
  ProgressBar,
  StopwatchWrapper,
} from "./Stopwatch.style";

const Stopwatch = ({ startGame, loading, roundPokemons }) => {
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
    console.log(roundPokemons);
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    if (roundPokemons.length === 0) {
      setRunning(false);
      console.log(time);
    }
  }, [roundPokemons]);

  useEffect(() => {
    if (startGame && loading) {
      setTimeout(() => {
        setRunning(true);
      }, 1000);
    }
  }, []);

  return (
    <>
      {running && <ProgressBar />}
      <StopwatchWrapper>
        <NumbersWrapper>
          {/* //TODO make a pipe for this time */}
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          <span>"</span>
        </NumbersWrapper>
      </StopwatchWrapper>
    </>
  );
};

export default Stopwatch;
