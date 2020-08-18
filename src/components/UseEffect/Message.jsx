import React from "react";
import { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    const mouseMove = (ev) => {
      const cardinals = { x: ev.x, y: ev.y };
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
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
