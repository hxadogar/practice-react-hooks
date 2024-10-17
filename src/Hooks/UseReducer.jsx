import { useReducer } from "react";
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function HandleIncrease() {
    dispatch({ type: "increase" });
  }
  function HandleDecrease() {
    dispatch({ type: "decrease" });
  }

  return (
    <div>
      <h1>UseReducer</h1>

      <p>
        <span>{state.count}</span>
      </p>

      <button onClick={HandleIncrease}>increase</button>
      <button onClick={HandleDecrease}>Decrease</button>
    </div>
  );
};

export default UseReducer;
