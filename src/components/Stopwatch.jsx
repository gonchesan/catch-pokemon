import { useState, useEffect } from 'react';
import { TimePipe } from '../pipes/timePipe';

//* Styles
import {
  NumbersWrapper,
  ProgressBar,
  StopwatchWrapper,
} from './Stopwatch.style';

const Stopwatch = ({ startGame, loading, roundPokemons, setScoredTime }) => {
  const [time, setTime] = useState(30000);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setRunning(false);
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

  useEffect(() => {
    if (roundPokemons.length === 0) {
      setRunning(false);
      setScoredTime(time);
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
          <span>{TimePipe(time)}</span>
          <span>"</span>
        </NumbersWrapper>
      </StopwatchWrapper>
    </>
  );
};

export default Stopwatch;
