import React, { useContext } from "react";
import { Details } from "./UseContext";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Main = () => {
  const details = useContext(Details);

  return (
    <div>
      <h1>Main</h1>

      <p>
        <span>{details.name}</span>
      </p>
      <p>
        <span>{details.age}</span>
      </p>

      <ul>
        {details.todo &&
          details.todo.map((todo) => (
            <li className="list-disc list-inside" key={todo.id}>
              {todo.title}
            </li>
          ))}
      </ul>


      <Child1 />
      <Child2 />

      
    </div>
  );
};

export default Main;
