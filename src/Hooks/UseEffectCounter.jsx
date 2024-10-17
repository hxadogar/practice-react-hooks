import { useState, useEffect } from "react";

const UseEffectCounter = () => {
  const [counters, setCounters] = useState({ one: 0, two: 0 });

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    return () => document.title = `${counters.one + counters.two + 1} new message!`;
  }, [counters.one, counters.two]);

  // Stop: Due to performance for learn new hooks

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  return (
    <div>
      <h1>UseEffect for Counter increase</h1>
      <span>{counters.one}</span> + <span>{counters.two}</span>
      <b>
        = <span>{counters.one + counters.two}</span>
        {counters.one + counters.two > 0 ? "messages" : "message"}
      </b>
      <br />
      <p>Timer with Effect hook</p>
      <span>{timer} second</span>
      <button
        onClick={() =>
          setCounters((prev) => ({
            ...prev,
            one: prev.one + 1,
          }))
        }
      >
        first message increase
      </button>
      <button
        onClick={() =>
          setCounters((prev) => ({
            ...prev,
            two: prev.two + 1,
          }))
        }
      >
        Sec message increase
      </button>
    </div>
  );
};

export default UseEffectCounter;
