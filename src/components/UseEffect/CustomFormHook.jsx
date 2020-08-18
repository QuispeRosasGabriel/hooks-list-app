import React, { useEffect, useState } from "react";
import "./effects.css";
import Message from "./Message";

const CustomFormHook = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // Cuando el componente se destruye =  return () => {};
  }, []);

  useEffect(() => {}, [formState]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h2>Use Effect</h2>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Ingresa tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Ingresa tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name.length >= 3 ? <Message /> : null}
    </div>
  );
};

export default CustomFormHook;
