import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { CookiesProvider } from "react-cookie";
import { AppProvider } from "./_providers/AppProviders";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
