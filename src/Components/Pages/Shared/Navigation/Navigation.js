import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../../img/logo.png'

const Navigation = () => {
  return (
    <div className="sticky-top">
      <Navbar bg="none" expand="lg"  >
        <Container>
          <Navbar.Brand as={Link} to="/home"><img width="40px" src={logo} alt="" /><span className="fw-bold text-primary">Travel</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fw-bold " as={Link} to="/home">Home</Nav.Link>
              <Nav.Link className="fw-bold " as={Link} to="/checkout ">Checkout </Nav.Link>
              <Nav.Link className="fw-bold " as={Link} to="/service ">Service</Nav.Link>
              <Nav.Link className="fw-bold " as={Link} to="/login ">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
