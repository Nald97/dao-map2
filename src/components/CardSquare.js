import React from "react";
import "./CardSquare.css";

const CardSquare = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="card-square"
      style={
        props.style || {
          height: "300px",
          width: "200px",
          border: "2px solid white",
          boxSizing: "border-box",
        }
      }
    ></div>
  );
});

export default CardSquare;
