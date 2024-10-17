import UseContext from "./Hooks/UseContext/UseContext";
import UseEffectCounter from "./Hooks/UseEffectCounter";
import UseEffectForGetApiDummyData from "./Hooks/UseEffectForGetApiDummyData";
import UseReducer from "./Hooks/UseReducer";
import UseRef from "./Hooks/UseRef";
import UseStateArray from "./Hooks/UseStateArray";
import UseStateBoolean from "./Hooks/UseStateBoolean";
import UseStateCounter from "./Hooks/UseStateCounter";
import UseStateInput from "./Hooks/UseStateInput";
import UseStateObject from "./Hooks/UseStateObject";
import UseLayout from "./Hooks/UseLayout";

const App = () => {
  return (
    <>
      <h1 className="flex justify-center text-3xl">
        Learn React Hooks
      </h1>
      {/* UseState */}
      <UseStateCounter />
      <UseStateInput />
      <UseStateObject />
      <UseStateBoolean />
      <UseStateArray />

      {/* useEffect */}

      <UseEffectCounter />
      <UseEffectForGetApiDummyData />

      {/* useContext */}
      <UseContext />

      {/* useRef */}
      <UseRef />

      {/* useReducer */}

      <UseReducer />

      {/* useLayoutEffect */}

      <UseLayout />
    </>
  );
};

export default App;
