import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar expand="lg" className="bg-dark fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="text-decoration-none text-light p-2">
            Rochak
          </Link>
        </Navbar.Brand>
        <NavbarToggle aria-controls="basic-navbar-nav" style={{background:"white"}}/>
        <Navbar.Collapse id="basic-navbar-nav bg-light">
          <Nav className="me-auto">
            <Link
              to="/works"
              className="text-decoration-none text-light p-2"
            >
              Works
            </Link>
            <Link
              to="/contact"
              className="text-decoration-none text-light p-2"
            >
              Contact
            </Link>
            <Link
              href="/download:resume"
              className="text-decoration-none text-light p-2"
            >
              Resume <FontAwesomeIcon icon={faDownload} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
