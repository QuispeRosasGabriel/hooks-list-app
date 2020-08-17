import React from "react";
import UseCounter from "../../hooks/UseCounter";
import "./counter.css";

const CustomCounterHook = () => {
  const { state, increment, decrement, reset } = UseCounter(100);

  return (
    <div>
      <h1>Counter With Hook: {state}</h1>
      <hr />

      <button onClick={() => increment(1)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-danger">
        Reset
      </button>
      <button onClick={() => decrement(1)} className="btn btn-danger">
        -1
      </button>
    </div>
  );
};

export default CustomCounterHook;
