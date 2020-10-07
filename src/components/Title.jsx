import React, { Component } from "react";

class Title extends Component {
  state = {
    title: "Mes voitures",
  };

  render() {
    return <h1>{this.state.title.toUpperCase()}</h1>;
  }
}

export default Title;
