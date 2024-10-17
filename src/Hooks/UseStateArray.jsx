import { useState } from "react";

const UseStateArray = () => {
  const [items, setItems] = useState([]);

  const [addItem, setAddItem] = useState("");

  function handleAddItemBtn() {
    setItems((prev) => [...prev, addItem]);
  }

  const handleDeleteItemBtn = () => {
    setItems(items.filter((_, i) => i !== +addItem - 1));
  };

  return (
    <div>
      <h1>UseState with Array</h1>
      <p>for remove Enter [index] number</p>

      <ul>
        {items &&
          items.map((item, index) => (
            <li key={index}>
              {index + 1}: {item}
            </li>
          ))}
      </ul>
      <input type="text" onChange={(e) => setAddItem(e.target.value)} />
      <button onClick={handleAddItemBtn}>Add</button>
      <button onClick={handleDeleteItemBtn}>Delete</button>
    </div>
  );
};

export default UseStateArray;
