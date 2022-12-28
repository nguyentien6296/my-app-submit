import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="App">
      <h1>Weather</h1>
      <App />
    </div>
  </React.StrictMode>
);
reportWebVitals();
