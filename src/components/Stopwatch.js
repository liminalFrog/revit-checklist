import React, { useState, useRef, useEffect } from 'react';
import Stopwatch from 'statman-stopwatch';
import 'bootstrap/dist/css/bootstrap.min.css';

const StopwatchComponent = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const stopwatch = useRef(new Stopwatch());

  useEffect(() => {
    if (running) {
      requestAnimationFrame(updateTimer);
    }
  }, [running]);

  const startStopwatch = () => {
    if (!running) {
      stopwatch.current.start();
      setRunning(true);
      console.log('Stopwatch started');
    } else {
      console.log('Stopwatch is already running');
    }
  };

  const suspendStopwatch = () => {
    if (running) {
      stopwatch.current.suspend();
      setRunning(false);
      console.log('Stopwatch suspended');
    } else {
      console.log('Stopwatch is not running');
    }
  };

  const resumeStopwatch = () => {
    if (!running) {
      stopwatch.current.resume();
      setRunning(true);
      console.log('Stopwatch resumed');
    } else {
      console.log('Stopwatch is already running');
    }
  }

  const stopStopwatch = () => {
    if (running) {
      stopwatch.current.stop();
      setRunning(false);
      console.log('Stopwatch stopped');
    } else {
      console.log('Stopwatch is not running');
    }
  };

  const resetStopwatch = () => {
    stopwatch.current.reset();
    setTime(0);
    setRunning(false);
    document.getElementById('resumeBtn').disabled = true;
    console.log('Stopwatch reset');
  };

  const updateTimer = () => {
    if (running) {
      setTime(stopwatch.current.read());
      console.log('Time updated:', stopwatch.current.read());
      requestAnimationFrame(updateTimer);
    } else {
      console.log('Stopwatch is not running, updateTimer not called');
    }
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${(milliseconds % 1000).toString().padStart(3, '0')}`;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="text-center">
          <div className='mb-3'>
            <img src='angry-eyes.png' alt='angry-eyes' className='w-50' />
          </div>
          <div className='mb-3'>
            <span className='bg-black bg-opacity-75 rounded-4 p-3 text-monospace fs-2 text-warning'>{formatTime(time)}</span>
          </div>
          <button className="btn btn-success rounded-3 py-1 m-2" onClick={startStopwatch}>Start</button>
          {running ? (
            <button className="btn btn-outline-warning rounded-3 py-1 m-2" onClick={suspendStopwatch}>Pause</button>
          ) : (
            <button id='resumeBtn' className="btn btn-warning rounded-3 py-1 m-2" onClick={resumeStopwatch} disabled={time === 0}>Resume</button>
          )}
          <button className="btn btn-danger rounded-3 py-1 m-2" onClick={stopStopwatch}>Stop</button>
          <button className="btn btn-secondary rounded-3 py-1 m-2" onClick={resetStopwatch}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default StopwatchComponent;