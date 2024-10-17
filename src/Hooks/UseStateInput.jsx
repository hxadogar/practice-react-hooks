import { useState } from "react";

const UseStateInput = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");

  function handleChanges(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>UseState with Input</h1>
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
