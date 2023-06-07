import React, { useEffect, useState, useRef } from "react";
import "./LandingPage.css";
import Square from "./components/Square";
import CardSquare from "./components/CardSquare";
import Line from "react-lineto";

const LandingPage = () => {
  const [squarePosition, setSquarePosition] = useState({ top: 400, left: 390 });
  const [line, setLine] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const squareRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    const squareRect = squareRef.current.getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect();

    setLine({
      x1: squareRect.left,
      y1: squareRect.top,
      x2: cardRect.right,
      y2: cardRect.bottom,
    });
  }, []);

  return (
    <div className="landing-page">
      <div className="overlay"></div>
      <div className="content"></div>

      <Square
        className="A"
        ref={squareRef}
        style={{
          position: "absolute",
          top: squarePosition.top,
          left: squarePosition.left,
        }}
      />

      <CardSquare className="B" ref={cardRef} />
      <Line
        x0={line.x1}
        y0={line.y1}
        x1={line.x2}
        y1={line.y2}
        borderColor="white"
        borderStyle="solid"
        borderWidth={2}
      />
    </div>
  );
};

export default LandingPage;
