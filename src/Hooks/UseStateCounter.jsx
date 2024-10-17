import { useState } from "react";

const UseStateCounter = () => {
  // const arr = useState(0);
  // const count = arr[0];
  // const setCount = arr[1];

  const [count, setCount] = useState(0);

  function handleClick() {
    // setCount(count + 1)
    setCount((pre) => pre + 1);
  }
  
  function handleClickX2() {
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
  }

  return (
    <>
      <div>
        <h1>UseState with Counter</h1>

        <span>{count}</span>
        <button onClick={handleClick}>Incresement</button>
        <button onClick={handleClickX2}>Incresement x2</button>
      </div>
    </>
  );
};

export default UseStateCounter;
