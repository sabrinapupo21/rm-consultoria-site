import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

(function () {
  const search = window.location.search;
  if (search.startsWith("?p=/")) {
    const path = search.slice(4).split("&q=");
    const decoded = path[0].replace(/~and~/g, "&");
    const query = path[1] ? "?" + path[1].replace(/~and~/g, "&") : "";
    window.history.replaceState(
      null,
      "",
      window.location.pathname.replace(/\/$/, "") +
        decoded +
        query +
        window.location.hash,
    );
  }
})();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/rm-consultoria-site">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
