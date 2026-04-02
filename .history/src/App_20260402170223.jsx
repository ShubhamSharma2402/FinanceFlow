// src/App.jsx

import React from "react";
import AppRouter from "./router/AppRouter";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      {/* Router Pages */}
      <AppRouter />

      {/* Global toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1f2937",
            color: "#fff",
            borderRadius: "10px"
          }
        }}
      />
    </>
  );
};

export default App;