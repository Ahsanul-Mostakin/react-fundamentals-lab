import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./Title.jsx";
import Product from "./Products.jsx";

function App() {
  let options = ["hii-tech", "fast", "readable"];
  return (
    <>
      <Product title="laptop" price={3000} features={options} />
      <Product title="phone" price={1000} />
      <Product title="watch" price={5000} />
    </>
  );
}

export default App;
