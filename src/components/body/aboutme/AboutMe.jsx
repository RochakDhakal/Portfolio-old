import React from "react";
import SvgWaves from "../svg/SvgWaves";
import Education from "./Info";
import Info from "./Info";
import Experience from "../works/Experience";
import SvgWavesBottom from "../svg/SvgWavesBottom";

function AboutMe() {
  return (
    <>
      <div className="about-me ">
        <div className=" p-5 mb-5">
          <Info />
        </div>
        <SvgWavesBottom />
      </div>
    </>
  );
}

export default AboutMe;
