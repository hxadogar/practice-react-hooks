import React, { useContext } from 'react';
import { Details } from './UseContext';

const Child1 = () => {
  const { name, age, setDetail } = useContext(Details);

  const handleNameChange = (e) => {
    setDetail((prev) => ({ ...prev, name: e.target.value || "Default" }));
  };

  const handleAgeChange = (e) => {
    setDetail((prev) => ({ ...prev, age: parseInt(e.target.value) || 0 }));
  };

  return (
    <div>
      <h1>Child 1</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Enter Age"
        value={age}
        onChange={handleAgeChange}
      />
    </div>
  );
};

export default Child1;
