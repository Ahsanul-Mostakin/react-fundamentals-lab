import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductGroup from "./ProductGroup";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Smart Phones & Basics Mobiles</h1>
      <ProductGroup />
    </>
  );
}
export default App;
