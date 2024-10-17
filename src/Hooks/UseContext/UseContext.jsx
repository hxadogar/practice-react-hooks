import { createContext, useState, useEffect } from "react";
import Main from "./Main";

export const Details = createContext();

const UseContext = () => {
  const [detail, setDetail] = useState({ name: "Hxadogar", age: 20, todo: [] });

  useEffect(() => {
    async function getTodo(endpoint) {
      try {
        const res = await fetch(endpoint);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setDetail((prev) => ({ ...prev, todo: data.posts.slice(0, 10) }));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    getTodo("https://dummyjson.com/posts");
  }, []);

  // console.log(detail)

  return (
    <div>
      <h1>UseContext</h1>

      <p>
        <span>{detail.name}</span>
      </p>
      <p>
        <span>{detail.age}</span>
      </p>
      <ul>
        {detail.todo &&
          detail.todo.map((todo) => (
            <li className="list-disc list-inside" key={todo.id}>
              {todo.title}
            </li>
          ))}
      </ul>

      <input
        placeholder="Enter Name"
        type="text"
        onChange={(e) =>
          setDetail((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        placeholder="Enter Age"
        // type="number"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        onChange={(e) =>
          setDetail((prev) => ({ ...prev, age: e.target.value }))
        }
      />

      <Details.Provider value={{ ...detail, setDetail }}>
        <Main />
      </Details.Provider>
    </div>
  );
};

export default UseContext;
