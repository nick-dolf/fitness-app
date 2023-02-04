import Button from "../components/Button";

function Excercise({ name, weight, sets }) {
  return (
    <div className="excercise">
      <header>
        <h2>{name}</h2>
      </header>
      <p>Weight: {weight} Sets: {sets}</p>
      <div>
        <Button text="Easy" style="green" />
        <Button text="Hard" style="orange"></Button>
        <Button text="Fail" style="red"></Button>
      </div>
    </div>
  );
}

export default Excercise;
