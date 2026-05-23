import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { Toaster } from "react-hot-toast";

import ExpenseProvider from "./context/ExpenseContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <ExpenseProvider>

      <Toaster position="top-right" />

      <App />

    </ExpenseProvider>

  </React.StrictMode>
);