import React, { useState } from "react";

const UseStateBoolean = () => {
  const [isopen, setIsOpen] = useState(true);

  return (
    <div>
      <h1>UseState for Boolean </h1>

      <button onClick={() => setIsOpen(!isopen)}>
        {isopen ? "Show" : "Hide"}
      </button>

      <div className={`${isopen ? "hidden" : "block"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        quibusdam.
      </div>
    </div>
  );
};

export default UseStateBoolean;
