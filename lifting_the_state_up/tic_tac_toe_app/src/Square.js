import React from "react";
import "./App.css";

const Square = ({ val, onSquareClick }) => {

  return (
    <div>
      <button className="square" onClick={onSquareClick}>
        {val}
      </button>
    </div>
  );
};

export default Square;
