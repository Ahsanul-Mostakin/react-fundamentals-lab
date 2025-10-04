import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const todoTittle = "Call Family";
const date = "9 / 19 / 2025";
createRoot(document.getElementById("root")).render(
  <>
    <App />
    <div>
      <h1>Todo App</h1>
      <h3>{todoTittle}</h3>
      <p>{todoDesc}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        accusantium.
      </p>
      <p>11/19/2020</p>
    </div>
  </>
);
