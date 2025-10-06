import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  function blueMoves() {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  }

  function yellowMoves() {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  }

  function greenMoves() {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  }

  function redMoves() {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  }

  return (
    <div>
      <h1>LUDO BOARD</h1>

      <h3>Blue Moves = {moves.blue}</h3>
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={blueMoves}
      >
        +1
      </button>

      <h3>Yellow Moves = {moves.yellow}</h3>
      <button
        style={{ backgroundColor: "yellow", color: "black" }}
        onClick={yellowMoves}
      >
        +1
      </button>

      <h3>Green Moves = {moves.green}</h3>
      <button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={greenMoves}
      >
        +1
      </button>

      <h3>Red Moves = {moves.red}</h3>
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={redMoves}
      >
        +1
      </button>
    </div>
  );
}
