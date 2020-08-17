import React from "react";
import CounterApp from "./components/UseState/CounterApp";
import CustomCounterHook from "./components/UseState/CustomCounterHook";
import SimpleForm from "./components/UseEffect/SimpleForm";

function App() {
  return (
    <div>
      <h1>Hooks List</h1>
      <hr />
      <CounterApp />
      <br />
      <CustomCounterHook />
      <br />
      <SimpleForm />
    </div>
  );
}

export default App;
