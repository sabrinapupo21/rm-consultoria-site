import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const params = new URLSearchParams(window.location.search);
const redirect = params.get("p");

if (redirect) {
  window.history.replaceState(null, "", "/rm-consultoria-site" + redirect);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/rm-consultoria-site">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
