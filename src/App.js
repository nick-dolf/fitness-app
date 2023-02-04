import Excercise from './partials/Excercise';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Excercise name="Squats" weight="45" sets="2"/>
        <Excercise name="Bench Press" weight="25"/>
        <Excercise name="Bicep Curls" weight="20"/>

      </header>
    </div>
  );
}

export default App;
