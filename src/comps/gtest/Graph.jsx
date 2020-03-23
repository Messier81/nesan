import React, { Component } from "react";

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfVer: 0, //number of vertices
      adjList: new Map(), //adjacency list for edges
      verText: "" //to keep track of new vertex to be added
    };
  }

  //event handler for changes in the vertex to be added, specifically for the text field
  handleVerChange = event => {
    this.setState({ verText: event.target.value }); //set state as text field changes
  };

  //adds a vertex to the graph
  addVertex() {
    //to eliminate duplicate vertex
    if (!this.state.adjList.has(this.state.verText)) {
      const mClone = new Map(this.state.adjList); //to modify state of map
      mClone.set(this.state.verText, []); //map is modified with new vertex
      //new state of map is set
      this.setState({
        numOfVer: this.state.numOfVer + 1, //number of vertex increased by 1
        adjList: mClone
      });
    }
  }

  addEdge() {}

  render() {
    return (
      <div>
        <button onClick={() => this.addVertex}>Add Vertex</button>
        <input type="text" onChange={this.handleVerChange} />
        <h1>{this.state.numOfVer}</h1>
        <h1>{this.state.adjList}</h1>

        <button onClick={() => this.addEdge}>Add Edge</button>
        <input type="text" onChange={this.handleVerChange} />
        <input type="text" onChange={this.handleVerChange} />
      </div>
    );
  }
}
