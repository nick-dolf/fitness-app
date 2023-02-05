import Excercise from "./Excercise";

function Workout({excercises}) {
  return (
    <div>        {excercises.map((excercise) => {
      return <Excercise
        key={`excercise-${excercise.id}`}
        name={excercise.name}
        weight={excercise.weight}
        sets={excercise.sets}
      />;
    })}</div>
  )
}

export default Workout