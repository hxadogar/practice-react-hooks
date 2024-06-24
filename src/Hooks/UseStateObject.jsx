import React, { useState } from "react";

const UseStateObject = () => {
  const [detail, setDetail] = useState({ counter: 0, name: "" });

  function increase() {
    setDetail((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  }
  function decrease() {
    setDetail((prev) => ({
      ...prev,
      counter: prev.counter - 1,
    }));

    // when zero console it
    detail.counter <= 1 ? console.log("zero") : null;
  }

  return (
    <div>
      <h1>UseState in Object instead using of multiples useState</h1>

      <p>
        My name is: <span>{detail.name}</span>
      </p>
      <p>
        You Click: <span>{detail.counter}</span>
      </p>

      <input
        type="text"
        value={detail.name}
        onChange={(e) =>
          setDetail((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <br />
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
};

export default UseStateObject;
