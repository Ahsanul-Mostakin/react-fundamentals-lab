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
function App() {
  return (
    <>
      <Home />
      <About />
      <Contact />
      <Feedback />
      <Fragments />
      <Clipboard />
      <Focus />
      <Keyboard />
      <Fider />
      <WelcomeAdmin />
    </>
  );
}

export default App;
