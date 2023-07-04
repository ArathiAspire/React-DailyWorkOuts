import { useState } from "react";
import "./App.css";
import Square from "./Square";
import CalcualteWinner from "./CalcualteWinner";

function App() {
  const [xIsNext,setXIsNext]=useState(true)
  const [squares,setSquares]=useState(Array(9).fill(null))
  const handleClick=(i)=>{
    if(squares[i] || CalcualteWinner(squares)){
      return;
    }
    const nextSquares=squares.slice()
    if(xIsNext){
      nextSquares[i]="X"
    }else{
      nextSquares[i]='O'
    }
    
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }
  const winner=CalcualteWinner(squares);
  let status;
  if(winner){
    status="Winner: "+winner
  }else{
    status="Next player: "+(xIsNext?"X":"O")
  }
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div>
      <div>{status}</div>
        <div className="row">
          <Square val={squares[0]} onSquareClick={()=>handleClick(0)}/>
          <Square val={squares[1]} onSquareClick={()=>handleClick(1)}/>
          <Square val={squares[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className="row">
          <Square val={squares[3]} onSquareClick={()=>handleClick(3)}/>
          <Square val={squares[4]} onSquareClick={()=>handleClick(4)}/>
          <Square val={squares[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className="row">
          <Square val={squares[6]} onSquareClick={()=>handleClick(6)}/>
          <Square val={squares[7]} onSquareClick={()=>handleClick(7)}/>
          <Square val={squares[8]} onSquareClick={()=>handleClick(8)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
