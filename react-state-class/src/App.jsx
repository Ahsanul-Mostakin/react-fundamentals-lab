import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import LikeButton from "./LikeButton";
import LudoBoard from "./LudoBoard";
import Todo from "./Todo";
import Lottery from "./Lottery";
import TicketNum from "./TicketNum";
import Ticket from "./Ticket";
import { genTicket, sum } from "../helper";
import MyForm from "./FORMS/MyForm";
function App() {
  let winCondition = (ticket) => {
    return ticket[0] === 0;
  };
  return (
    <>
      {/* <Counter /> */}
      {/* <LikeButton /> */}
      {/* <LudoBoard /> */}
      {/* <Todo /> */}
      {/* <Lottery /> */}
      {/* <Lottery n={3} winCondition={winCondition} /> */}
      <MyForm />
    </>
  );
}

export default App;
