import PropTypes from "prop-types";
import Button from "../components/Button";

function Excercise({ name, weight, sets }) {
  return (
    <div className="excercise">
      <header>
        <h2>{name}</h2>
        <div>
          <span>Weight: {weight}</span>
          <span>Sets: {sets}</span>
        </div>

      </header>
      <div>
        <Button text="Easy" style="green" />
        <Button text="Hard" style="orange"></Button>
        <Button text="Fail" style="red"></Button>
      </div>
    </div>
  );
}

Excercise.defaultProps = {
  text: "default",
  weight: 10,
  sets: 2,
};


Excercise.propTypes = {
  text: PropTypes.string,
  weight: PropTypes.number,
  sets: PropTypes.number,
};

export default Excercise;
