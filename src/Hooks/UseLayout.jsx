import { useLayoutEffect, useState, useEffect } from "react";

const UseLayout = () => {

  const [Toggle, setToggle] = useState(true);
  return (
    <div>
      <h1>UseLayout</h1>

      {Toggle && <p>Lorem ipsum dolor</p>}

      <button onClick={() => setToggle(!Toggle)}>
        {Toggle ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default UseLayout;
