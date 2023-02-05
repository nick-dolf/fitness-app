import Excercise from "./partials/Excercise";
import Workout from "./partials/Workout";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const excercises = [
    { id: 0, name: "Squats", weight: 45, sets: 2 },
    { id: 1, name: "Bench Press", weight: 25, sets: 2 },
    { id: 2, name: "Rows", weight: 105, sets: 2  },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Workout excercises={excercises}/>

      </header>
    </div>
  );
}

export default App;
