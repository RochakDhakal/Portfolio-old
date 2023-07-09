import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Experience() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="mt-5 pt-5">
      <div data-aos="fade-up">
        <span className="d-block display-4 text-warning mt-2 text-center">
          Experience
        </span>
        <span className="display-6 p-2 text-success">Internship</span>
        <span className="text-secondary">( FEB 2023 - JUN 2023 )</span>
        <span
          className="p-2 d-block font-weight-italic text-secondary"
          style={{ fontSize: "2rem" }}
        >
          <span style={{color:"limegreen"}}>Interned</span> as a <span className="text-primary">frontend developer</span> at <span style={{color:"#FF6600"}}>CloudyFox</span>, gaining valuable
          industry experience in frontend development practices and
          collaborating with the team on various aspects of web development.
        </span>
      </div>
    </div>
  );
}

export default Experience;
