import React, { useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <svg
      width="100%"
      id="svg"
      viewBox="0 0 1440 390"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150 bg-dark"
    >
      <path
        d="M 0,400 C 0,400 0,200 0,200 C 166.93333333333334,169.2 333.8666666666667,138.4 511,158 C 688.1333333333333,177.6 875.4666666666667,247.60000000000002 1032,263 C 1188.5333333333333,278.4 1314.2666666666667,239.2 1440,200 C 1440,200 1440,400 1440,400 Z"
        stroke="none"
        strokeWidth={0}
        fill="#6c757d"
        fillOpacity={1}
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      />
      <foreignObject x="0%" y="75%" width="100%" height="100%">
        <div className="d-flex justify-content-evenly align-items-center">
          <a href="https://github.com/RochakDhakal/" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="display-5 p-3 text-light"
              title="GitHub"
              style={{ fontSize: "5rem" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/rochak-dhakal/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="p-3 text-light"
              style={{ fontSize: "5rem" }}
              title="LinkedIn"
            />
          </a>
          <a href="mailto:rochakdhakal@gmail.com" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="display-5 p-3 text-light"
              style={{ fontSize: "5rem" }}
              title="Gmail"
            />
          </a>
          <a href="https://www.instagram.com/rochakdhakal32/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="display-5 p-3 text-light"
              style={{ fontSize: "5rem" }}
              title="Instagram"
            />
          </a>
        </div>
      </foreignObject>
    </svg>
  );
}

export default Footer;
