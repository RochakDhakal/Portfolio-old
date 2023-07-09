import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

function Work() {
  return (
    <div className="bg-dark">
      <Projects/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default Work;
