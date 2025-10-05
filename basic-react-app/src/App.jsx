import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./Title.jsx";
import Product from "./Products.jsx";
import User from "./User.jsx";

function App() {
  return (
    <>
      <User username="Ahsanul Mostakin" textcolor="red" />
      <User username="Ahsanul Mostaking" textcolor="green" />
      <User username="Ahsanul Mostakinggg" textcolor="blue" />
    </>
  );
}
export default App;
