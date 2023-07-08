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
    <div className="container vh-100 bg-dark mt-5">
      <div className="row d-flex justify-content-between align-items-between">
        <div className="text-center text-warning display-4 p-5">Projects</div>
        <div className="card col-md m-2" data-aos="fade-right">
          <img src={calculator} alt="Calculator" className="p-2" />
          <div className="card-body">
            <h5 className="card-title">Calculator</h5>
            <p className="card-text">
              Made with Basic HTML, CSS and vanilla JavaScript
            </p>
            <a
              href="https://github.com/RochakDhakal/Web-Calculator"
              className="btn btn-primary"
            >
              View Code
            </a>
          </div>
        </div>
        {/* Shopping Cart */}
        <div className="card col-md m-2" data-aos="zoom-out">
          <img src={shopping} alt="Shopping Cart" className="m-2 border"/>
          <div className="card-body">
            <h5 className="card-title">Shopping Cart</h5>
            <p className="card-text">
              Developed a static shopping cart website using ReactJS, Redux,
              React Router and Bootstrap
            </p>
            <a
              href="https://github.com/RochakDhakal/ShoppingCart"
              className="btn btn-primary"
            >
              View Code
            </a>
          </div>
        </div>
        <div className="card col-md m-2" data-aos="fade-left">
          <img src={covid} alt="Covid" className="p-2"/>
          <div className="card-body">
            <h5 className="card-title">Covid Report</h5>
            <p className="">
              Created using React, React-Router, Axios and CSS frameworks.
            </p>
            <a
              href="https://github.com/RochakDhakal/Covid-19-Report"
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
