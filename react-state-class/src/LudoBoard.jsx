import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });
  let [arr, setArr] = useState(["no moves"]);

  function updateBlue() {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
    setArr((prevArr) => {
      return [...prevArr, "blue moves"];
    });
  }

  function updateYellow() {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
    setArr((prevArr) => {
      return [...prevArr, "yellow moves"];
    });
  }

  function updateRed() {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  }

  function updateGreen() {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  }

  return (
    <div>
      <h1>Game Begins</h1>
      <h2>{arr.join(", ")}</h2>

      <p>Blue Moves={moves.blue}</p>
      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={updateBlue}
      >
        +1
      </button>

      <p>Yellow Moves={moves.yellow}</p>
      <button
        style={{ backgroundColor: "yellow", color: "white" }}
        onClick={updateYellow}
      >
        +1
      </button>

      <p>Red Moves={moves.red}</p>
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={updateRed}
      >
        +1
      </button>

      <p>Green Moves={moves.green}</p>
      <button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={updateGreen}
      >
        +1
      </button>
    </div>
  );
}
