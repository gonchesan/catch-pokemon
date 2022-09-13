import { useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { TimePipe } from '../pipes/timePipe';

//* Styles
import {
  NumbersWrapper,
  ProgressBar,
  StopwatchWrapper,
} from './Stopwatch.style';

const Stopwatch = () => {
  const {
    startGame,
    loading,
    roundPokemons,
    setScoredTime,
    time,
    setTime,
    running,
    setRunning,
    setShowModal,
  } = useContext(DataContext);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setRunning(false);
            // TODO Quitar el comentario a continuacion cuando se haga la pantalla
            setShowModal(true);
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
      }, 2500);
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
