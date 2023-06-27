import {
  faCalculator,
  faCartShopping,
  faShoppingCart,
  faVirusCovid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="display-4 text-warning text-center pt-5">Projects</div>
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="card p-3 m-2" style={{ width: "20rem", height: "20rem" }} data-aos="fade-right">
          <FontAwesomeIcon icon={faCalculator} className="display-1" />
          <div className="card-body">
            <h5 className="card-title">Calculator</h5>
            <p className="card-text">
              Made using HTML, CSS and vanilla JavaScript.
            </p>
            <a
              href="https://github.com/RochakDhakal/Web-Calculator"
              className="btn btn-primary"
            >
              View Code
            </a>
          </div>
        </div>
        <div className="card p-3 m-2" style={{ width: "20rem", height: "20rem" }} data-aos="zoom-in">
          <FontAwesomeIcon icon={faShoppingCart} className="display-1" />
          <div className="card-body">
            <h5 className="card-title">Shopping Cart</h5>
            <p className="card-text">
              Developed using ReactJS, Redux, React Router and Bootstrap.
            </p>
            <a
              href="https://github.com/RochakDhakal/ShoppingCart"
              className="btn btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
        <div className="card p-3 m-2" style={{ width: "20rem", height: "20rem" }} data-aos="fade-left">
          <FontAwesomeIcon icon={faVirusCovid} className="display-1" />
          <div className="card-body">
            <h5 className="card-title">Covid Report</h5>
            <p className="card-text">
              Created using ReactJS, Axios and CSS
              frameworks.
            </p>
            <a
              href="https://github.com/RochakDhakal/Covid-19-Report"
              className="btn btn-primary "
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
