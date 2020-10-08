import React from "react";

function PropsStateCars(props) {
  return props.letState.cars.map((propsCar) => (
    <div>
      <h2>Nom modifié: {(propsCar.name + '2')}</h2>
      <p>Age modifié: {(propsCar.age += 10)}</p>
    </div>
  ));
}

export default PropsStateCars;
