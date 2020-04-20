import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="Projects">
      <Link to="/lct">
        <li>Linux Commands Tester</li>
      </Link>
    </div>
  );
}

export default Projects;
