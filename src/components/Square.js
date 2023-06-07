import React from "react";
import "./Square.css";

const Square = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="square"
      style={
        props.style || {
          width: "50px",
          height: "50px",
          border: "2px solid white",
          boxSizing: "border-box",
        }
      }
    ></div>
  );
});

export default Square;
