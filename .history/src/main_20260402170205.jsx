// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./globals.css";
import "./animations.css";

import { ThemeProvider } from "./context/ThemeContext";
import { AppProvider } from "./context/AppContext";
import { TransactionProvider } from "./context/TransactionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppProvider>
        <TransactionProvider>
          <App />
        </TransactionProvider>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);