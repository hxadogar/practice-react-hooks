import React, { useState, useEffect } from "react";

const UseEffectCounter = () => {
  const [counters, setCounters] = useState({ one: 0, two: 0 });

  const [timer, setTimer] = useState(0)

  // useEffect(() => {
  //   document.title = `${counters.one + counters.two} new message!`
  // }, [counters.one, counters.two])
  
  // Stop: Due to performance for learn new hooks
  
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimer(timer + 1)
  //   }, 2000);
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])
  

  return (
    <div>
      <h1>UseEffect for Counter increase</h1>
      <span>{counters.one}</span>|
      <span>{counters.two}</span>|
      <span>{timer}</span>
      <button
        onClick={() =>
          setCounters((prev) => ({
            ...prev,
            one: prev.one + 1,
          }))
        }
      >
        one
      </button>
      <button
        onClick={() =>
          setCounters((prev) => ({
            ...prev,
            two: prev.two + 1,
          }))
        }
      >
        two
      </button>
    </div>
  );
};

export default UseEffectCounter;
