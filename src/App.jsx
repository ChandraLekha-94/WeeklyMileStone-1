import React from "react";
import NavBar from "./components/NavBar";
import Choices from "./components/Choices";
import Cards from "./components/Cards";
import Collections from "./components/Collections";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Choices />
      <Cards />
      <Collections />
    </div>
  );
}

export default App;
