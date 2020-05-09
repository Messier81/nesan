import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="Projects">
      <Link to="/riv">
        <li>Reddit Image Viewer</li>
      </Link>
    </div>
  );
}

export default Projects;
