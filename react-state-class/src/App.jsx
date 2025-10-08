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

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <LikeButton /> */}
      {/* <LudoBoard /> */}
      {/* <Todo /> */}
      {/* <Lottery /> */}
      <Lottery n={3} winningSum={15} />
      <Lottery n={5} winningSum={18} />
    </>
  );
}

export default App;
