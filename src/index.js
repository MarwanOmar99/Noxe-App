import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ContextMoviesProvider } from "./Components/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextMoviesProvider>
      <App />
    </ContextMoviesProvider>
  </BrowserRouter>
);
