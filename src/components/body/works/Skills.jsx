import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
function Skills() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-up mb-5">
      <div className="p-5 display-4 text-center text-warning" data-aos="zoom-in">Skills</div>
      <div className="d-flex justify-content-center align-items-center skills">
        <img src="src\assets\html.png" alt="HTML 5" />
        <img src="src\assets\css.png" alt="CSS 3" />
        <img src="src\assets\javascript.png" alt="JavaScript" />
        <img src="src\assets\react.png" alt="React" />
        <img src="src\assets\bootstrap.png" alt="Bootstrap" />
        <img src="src\assets\Redux.png" alt="Redux" />
        <img src="src\assets\Axios.png" alt="Axios" />
      </div>
    </div>
  );
}

export default Skills;
