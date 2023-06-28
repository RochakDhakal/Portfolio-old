import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import html from "../../assets/html.png";
function Header() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Navbar
      expand="lg"
      className="bg-dark fixed-top"
      data-aos="fade-down"
      data-duration="1500"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="text-decoration-none text-light p-2">
            Rochak
          </Link>
        </Navbar.Brand>
        <NavbarToggle
          aria-controls="basic-navbar-nav"
          style={{ background: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav bg-light">
          <Nav className="me-auto">
            <Link to="/works" className="text-decoration-none text-light p-2">
              Works
            </Link>
            <Link to="/contact" className="text-decoration-none text-light p-2">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
