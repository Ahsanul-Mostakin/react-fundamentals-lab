import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "../helper";

export default function Lottery() {
  const [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) == 15;
  let buyTicket = () => {
    setTicket(genTicket(3));
  };
  return (
    <div className="h1">
      <h1>Lottery Game</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <button className="btn" onClick={buyTicket}>
        Buy new ticket
      </button>
      <h1>{isWinning && "Congratualation, You won"}</h1>
    </div>
  );
}
