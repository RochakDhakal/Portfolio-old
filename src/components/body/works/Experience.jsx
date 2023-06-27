import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Experience() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="vh-100 mt-5 pt-5">
      <div data-aos="fade-up">
        <span className="d-block display-4 text-warning mt-2 text-center">Experience</span>
        <span className="display-6 p-2 text-secondary">
          Internship
        </span>
        <span className="display-7 font-light">
          ( FEB 2023 - JUN 2023 )
        </span>
        <span className="display-6 d-block font-weight-italic text-secondary">
          Interned as a frontend developer at{" "}
          <a href="https://www.cloudyfox.io/" className="text-decoration-none">
            CloudyFox
          </a>
          , gaining valuable industry experience in frontend development
          practices and collaborating with the team on various aspects of web
          development.
        </span>
      </div>
    </div>
  );
}

export default Experience;
