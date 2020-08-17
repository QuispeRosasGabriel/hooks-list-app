import React from "react";
import CounterApp from "./components/UseState/CounterApp";
import CustomCounterHook from "./components/UseState/CustomCounterHook";

function App() {
  return (
    <div>
      <h1>Hooks List</h1>
      <hr />
      <CounterApp />
      <CustomCounterHook />
    </div>
  );
}

export default App;
