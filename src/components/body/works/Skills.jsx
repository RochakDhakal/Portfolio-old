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
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/javascript.png";
import react from "../../../assets/react.png";
import bootstrap from "../../../assets/bootstrap.png";
import redux from "../../../assets/Redux.png";
import axios from "../../../assets/Axios.png";
function Skills() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-up" className="mb-5 vh-100">
      <div
        className="p-5 display-4 text-center text-warning"
        data-aos="zoom-in"
      >
        Skills
      </div>
      <div className="d-flex justify-content-center align-items-center skills text-light">
        <img src={html} alt="HTML 5" title="HTML 5" />
        <img src={css} alt="CSS 3" title="CSS 3"/>
        <img src={javascript} alt="JavaScript" title="JavaScript"/>
        <img src={react} alt="React" title="React JS"/>
        <img src={bootstrap} alt="Bootstrap" title="Bootstrap"/>
        <img src={redux} alt="Redux" title="Redux"/>
        <img src={axios} alt="Axios" title="Axios"/>
      </div>
    </div>
  );
}

export default Skills;
