import React from "react";
import "./GraphTester.css";
import Graph from "./Graph";

class GraphTester extends React.Component {
  render() {
    return (
      <div className="GraphTester">
        <Graph numberOfVertices={["A", "B"]} />
      </div>
    );
  }
}

export default GraphTester;
