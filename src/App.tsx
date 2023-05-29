import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import StartRound from "./pages/StartRound";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-round/*" element={<StartRound />} />
      </Routes>
    </div>
  );
}

export default App;
