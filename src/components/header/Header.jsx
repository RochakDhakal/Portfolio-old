import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png"
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavItemClick = () => {
    setIsNavOpen(false);
  };

  const handleDocumentClick = (event) => {
    if (
      isNavOpen &&
      event.target.closest(".navbar") === null &&
      event.target.className !== "navbar-toggler"
    ) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-secondary fixed-top"
      expanded={isNavOpen}
    >
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className="text-decoration-none text-light"
            onClick={handleNavToggle}
          >
            <img src={logo} alt="Rochak" title="Rochak Dhakal" style={{height:"3rem"}}/>
          </Link>
          <span className="fs-6 px-2 neon-text">Available for Work</span>
        </Navbar.Brand>
        <NavbarToggle
          aria-controls="responsive-navbar-nav"
          style={{ background: "white" }}
          className="border-none"
          onClick={handleNavToggle}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav bg-light"
          className="justify-content-end align-items-end"
        >
          <Nav className="ml-auto justify-content-end">
            <Link
              to="/works"
              className="text-decoration-none text-light px-2"
              onClick={handleNavToggle}
            >
              Works
            </Link>
            <Link
              to="/contact"
              className="text-decoration-none text-light px-2"
              onClick={handleNavToggle}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
