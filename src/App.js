import Workout from "./partials/Workout";
import Bar from "./components/Bar";
import Button from "./components/Button";

import { useState, useEffect } from "react";

function App() {
  const excercises = [
    { id: 0, name: "Squats", weight: 45, sets: 2 },
    { id: 1, name: "Bench Press", weight: 25, sets: 2 },
    { id: 2, name: "Rows", weight: 105, sets: 2 },
  ];

  return (
    <div className="app">

      <Bar>
          <Button text="Edit"></Button>
          <Button></Button>
      </Bar>

      <header className="App-header">
        <Workout excercises={excercises}/>

      </header>
      <div className="app-body">

      </div>
    </div>
  );
}

export default App;
