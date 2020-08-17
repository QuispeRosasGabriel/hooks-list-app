import React from "react";
import { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    console.log("Componente Montado");

    return () => {
      console.log("Componente Destruido");
    };
  }, []);

  return (
    <div>
      <h3>Eres genial</h3>
    </div>
  );
};

export default Message;
