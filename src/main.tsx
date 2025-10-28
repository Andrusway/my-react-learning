import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Books from "./Components/Books/Books";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Books />
  </React.StrictMode>
);