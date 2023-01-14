import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PortfolioTheme from "./theme/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PortfolioTheme>
      <App />
    </PortfolioTheme>
  </React.StrictMode>
);
