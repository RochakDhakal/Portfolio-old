import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import SvgWavesBottom from "../svg/SvgWavesBottom";
import Skills from "./Skills";

function Work() {
  return (
    <div className="bg-dark">
      <Projects/>
      <Skills />
      <Experience className="vh-100" />
    </div>
  );
}

export default Work;
