import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import LikeButton from "./LikeButton";
import LudoBoard from "./LudoBoard";
import Todo from "./Todo";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <LikeButton /> */}
      {/* <LudoBoard /> */}
      <Todo />
    </>
  );
}

export default App;
