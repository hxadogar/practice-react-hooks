import React, { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const [name, setName] = useState("");

  const count = useRef(0);

  const inputEl = useRef();
  function handleClick() {
    inputEl.current.style.width = "500px";
    inputEl.current.focus();
  }

  function HandleEnterKey() {
    console.log("Enter Key pressed");
    inputEl.current.blur();
  }

  useEffect(() => {
    count.current = count.current + 1;
  });

  useEffect(() => {
    inputEl.current.focus();
  });

  return (
    <div>
      <h1>UseRef for non-rerender</h1>
      <p>
        <span>Name: {name}</span>
      </p>
      <p>
        <span>Count: {count.current}</span>
      </p>

      <input
        type="text"
        value={name}
        ref={inputEl}
        onKeyDown={(e) => (e.key === "Enter" ? HandleEnterKey() : null)}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default UseRef;
