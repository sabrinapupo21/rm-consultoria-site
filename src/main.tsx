import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
const params = new URLSearchParams(window.location.search);
const redirect = params.get("p");

if (redirect) {
  window.history.replaceState(null, "", "/rm-consultoria-site" + redirect);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
