import React, { useEffect } from "react";
import avatar from "../../../assets/avatar.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

function Info() {
  return (
    <div
      className="py-2 card-deck"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
    >
      <div className="card bg-dark d-flex border-dark">
        <h5 className="card-title display-1 text-warning text-center">
          About Me
        </h5>
        <div className="row w-100">
          <img
            className="col-md-4 d-flex"
            src={avatar}
            alt="Card image cap"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
          />
          <div className="card-body col-md-8 d-flex justify-content-center">
            <section className=" d-flex flex-column">
              <p
                className=" card-text text-secondary"
                data-aos="zoom-in"
                style={{fontSize:"1.5rem"}}
                data-aos-easing="ease-in-out"
              >
                Welcome to my website! I'm{" "}
                <span style={{ color: "greenyellow" }}>Rochak Dhakal</span>, a
                passionate and aspiring frontend developer. While I'm still at
                the beginning of my professional journey, I have already dived
                into the exciting world of web development and embarked on
                several personal projects to hone my skills.
              </p>
              <p
                className="card-text text-secondary"
                data-aos="zoom-in"
                style={{fontSize:"1.5rem"}}
                data-aos-easing="ease-in-out"
              >
                I'm captivated by the art of transforming designs into
                interactive and dynamic digital experiences. Through my personal
                projects, I've gained hands-on experience in{" "}
                <span className="text-danger">HTML</span>,
                <span className="text-info"> CSS</span>,
                <span className="text-warning"> JavaScript</span>, and{" "}
                <span className="text-primary"> React JS</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
