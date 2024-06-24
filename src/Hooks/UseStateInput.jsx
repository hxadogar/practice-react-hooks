import React, { useState } from "react";

const UseStateInput = () => {
  const [name, setName] = useState("");

  function handleChanges(e) {
    setName(e.target.value);
  }

  // function in input
  const [fatherName, setFatherName] = useState("");

  return (
    <div>
      <h1>UserState with Input</h1>
      <div>
        <p>
          My Name is: <span>{name}</span>
        </p>

        <input
          type="text"
          value={name}
          onChange={handleChanges}
        />
      </div>

      <div>
        <p>
          My Father Name: <span>{fatherName}</span>
        </p>

        <input
          type="text"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseStateInput;
