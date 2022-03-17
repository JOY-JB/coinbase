import React from "react";
import Dashboard from "./layouts/Dashboard";
import { BrowserRouter } from "react-router-dom";
import "./main.css";

function App() {
  return (
    <BrowserRouter>
      <Dashboard></Dashboard>
    </BrowserRouter>
  );
}

export default App;
