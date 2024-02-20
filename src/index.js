import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { ReactQuizContext } from "./context/ReactQuizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactQuizContext>
      <App />
    </ReactQuizContext>
  </React.StrictMode>
);
