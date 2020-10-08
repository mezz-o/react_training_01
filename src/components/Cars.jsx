import React, { Component } from "react";
import PropsStateCars from "./PropsStateCars";

class Cars extends Component {
  state = {
    cars: [
      { name: "Peugeot", color: "red", age: 20 },
      { name: "Mercedes", color: "black", age: 5 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.cars.map((car, index) => (
          <div key={index}>
            <hr />
            <h2>Name: {car.name}</h2>
            <p>Color: {car.color}</p>
            <p>Age: {car.age}</p>
          </div>
        ))}
        <hr />
        <h1>Affichage des datas depuis un autre composant:</h1>
        <PropsStateCars letState={this.state} />
      </div>
    );
  }
}

export default Cars;
