import React, { Component } from "react";

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = { numOfVer: this.props.numberOfVertices };
  }
  render() {
    return (
      <div>
        <h1>{this.state.numOfVer}</h1>
      </div>
    );
  }
}
