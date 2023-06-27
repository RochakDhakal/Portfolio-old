import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import SvgWavesBottom from "../svg/SvgWavesBottom";
import Skills from "./Skills";

function Work() {
  return (
    <div className="pt-5 bg-dark">
      <Projects />
      <Skills/>
      <Experience className="vh-100"/>
      <SvgWavesBottom/>
    </div>
  );
}

export default Work;
