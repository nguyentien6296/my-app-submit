import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./src/reportWebVitals";

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
