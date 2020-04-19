import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="Projects">
      <Link to="/gtest">
        <li>Graph Tester</li>
      </Link>
    </div>
  );
}

export default Projects;
