import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Feedback from "./Pages/Feedback";
import Fragments from "./Pages/Fragments";
import Clipboard from "./Pages/Clipboard";
import Focus from "./Pages/Focus";
import Keyboard from "./Pages/Keyboard";
import Fider from "./Pages/Fider";
import WelcomeAdmin from "./Pages/WelcomeAdmin";
import Style from "./Pages/Style";
import NewComponents from "./Pages/NewComponents";
function App() {
  return (
    <>
      <Home />
      <About />
      <NewComponents />
      {/* 
      <Contact />
      <Feedback />
      <Fragments />
      <Clipboard />
      <Focus />
      <Keyboard />
      <Fider />
      <WelcomeAdmin />
      <Style /> */}
      <p>This is p tag</p>
    </>
  );
}

export default App;
