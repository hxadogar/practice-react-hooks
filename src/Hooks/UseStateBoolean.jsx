import { useState } from "react";

const UseStateBoolean = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>UseState for Boolean </h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      <div className={`${show ? "block" : "hidden"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        quibusdam.
      </div>
    </div>
  );
};

export default UseStateBoolean;
