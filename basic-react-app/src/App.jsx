import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./Title.jsx";
import Product from "./Products.jsx";

function App() {
  return (
    <>
      <Product title="laptop" price={30000} />
      <Product title="phone" price={10000} />
      <Product title="watch" price={5000} />
    </>
  );
}

export default App;
