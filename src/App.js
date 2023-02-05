import Excercise from "./partials/Excercise";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const excercises = [
    { name: "Squats", weight: 45, sets: 2 },
    { name: "Dips", weight: 25, sets: 2 },
    { name: "Pushes" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {excercises.map((excercise) => {
          return <Excercise
            name={excercise.name}
            weight={excercise.weight}
            sets={excercise.sets}
          />;
        })}
      </header>
    </div>
  );
}

export default App;
