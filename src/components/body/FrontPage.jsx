import React from "react";
import "./style.css";
import BlobAnimation from "./svg/BlobAnimation";
import AboutMe from "./aboutme/AboutMe";
import { useTypewriter } from "react-simple-typewriter";
function FrontPage() {
  const [text] = useTypewriter({
    words: ["Welcome To My Website"],
  });
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center front-page">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="d-flex justify-content-center align-items-center display-2 neon-text pt-5 mt-3 text-center"></span>
          <BlobAnimation className="" />
        </div>
      </div>
      <AboutMe />
    </div>
  );
}

export default FrontPage;
