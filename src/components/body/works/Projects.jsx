import React, { useEffect } from "react";
import calculator from "../../../assets/Calculator.gif";
import shopping from "../../../assets/Shopping.gif";
import covid from "../../../assets/Covid.gif";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="container bg-dark my-5 pb-5">
      <div className="row d-flex justify-content-evenly align-items-evenly">
        <div className="text-center text-warning display-4 p-5">Projects</div>
        {/* Calculator */}
        <div className="card col-md-3 bg-secondary border border-5 border-dark rounded-3" data-aos="zoom-in">
          <img src={calculator} alt="Calculator" className="p-2" />
          <div className="card-body">
            <h5 className="card-title">Calculator</h5>
            <p className="card-text">
              Made with Basic HTML, CSS and vanilla JavaScript
            </p>
            <a
              href="https://github.com/RochakDhakal/Web-Calculator"
              target="_blank"
              className="btn btn-primary"
            >
              View Code
            </a>
          </div>
        </div>
        {/* Shopping Cart */}
        <div className="card col-md-3 bg-secondary border border-5 border-dark rounded-3" data-aos="zoom-in">
          <img src={shopping} alt="Shopping Cart" className="m-2 border"/>
          <div className="card-body">
            <h5 className="card-title">Shopping Cart</h5>
            <p className="card-text">
              Developed a static shopping cart website using ReactJS, Redux,
              React Router and Bootstrap
            </p>
            <a
              href="https://github.com/RochakDhakal/ShoppingCart"
              target="_blank"
              className="btn btn-primary"
            >
              View Code
            </a>
          </div>
        </div>
        {/* Covid Report */}
        <div className="card col-md-3 bg-secondary border border-5 border-dark rounded-3" data-aos="zoom-in">
          <img src={covid} alt="Covid" className="p-2"/>
          <div className="card-body">
            <h5 className="card-title">Covid Report</h5>
            <p className="">
              Created using React, Axios and CSS frameworks.
            </p>
            <a
              href="https://github.com/RochakDhakal/Covid-19-Report"
              target="_blank"
              className="btn btn-primary"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
