import React from "react";

const Line = ({ x1, y1, x2, y2 }) => {
  const dy = y2 - y1;
  const dx = x2 - x1;
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  const length = Math.sqrt(dx * dx + dy * dy);

  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(${x1}px, ${y1}px) rotate(${angle}deg)`,
        height: "2px",
        width: `${length}px`,
        backgroundColor: "white",
      }}
    />
  );
};

export default Line;
