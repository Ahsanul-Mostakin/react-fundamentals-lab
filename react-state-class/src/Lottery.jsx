import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "../helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winCondition }) {
  const [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);
  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div className="h1">
      <h1>Lottery Game</h1>
      <div className="ticket">
        <Ticket ticket={ticket} />
      </div>
      <button className="btn" onClick={buyTicket}>
        Buy new ticket
      </button>
      <h1>{isWinning && "Congratualation, You won"}</h1>
    </div>
  );
}
