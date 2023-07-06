import React, { useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faInstagramSquare,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  faEnvelope,
  faMailBulk,
  faMailReply,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
      <div className="footer d-flex justify-content-center align-items-center pt-5">
        <div><a href="mailto:rochakdhakal@gmail.com" className="text-decoration-none display-4 text-light m-2 fai" title="rochakdhakal@gmail.com"><b>@</b></a></div>
        <a href="https://www.linkedin.com/in/rochak-dhakal/">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="display-4 text-light m-2 fai"
            title="LinkedIn"
            data-aos="fade-right"
          />
        </a>
        <a href="https://www.instagram.com/rochakdhakal32/">
          <FontAwesomeIcon
            icon={faInstagram}
            className="display-4 text-light m-2 fai"
            title="Instagram"
            data-aos="zoom-in"
          />
        </a>
        <a href="https://github.com/RochakDhakal">
          <FontAwesomeIcon
            icon={faGithub}
            className="display-4 text-light m-2 fai"
            title="GitHub"
            data-aos="fade-left"
          />
        </a>
      </div>
  );
}

export default Footer;
