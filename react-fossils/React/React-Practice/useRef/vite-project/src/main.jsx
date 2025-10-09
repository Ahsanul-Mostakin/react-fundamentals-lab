import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "milligram/dist/milligram.css";
import "./assets/CSS/style.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
