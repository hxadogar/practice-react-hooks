import { useState } from "react";

const UseStateObject = () => {
  const [detail, setDetail] = useState({ age: 0, name: "" });

  function increase() {
    setDetail((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));
  }
  function decrease() {
    // not negtive number allowed
    if (detail.age === 0) return;
    setDetail((prev) => ({
      ...prev,
      age: prev.age - 1,
    }));
  }

  return (
    <div>
      <h1>UseState in Object instead using of multiples useState</h1>

      <p>
        My name is: <span>{detail.name}</span>
      </p>
      <p>
        My Age: <span>{detail.age}</span>
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
