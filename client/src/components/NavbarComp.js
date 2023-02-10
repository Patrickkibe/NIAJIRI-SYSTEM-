import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./NavbarComp.css"


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Service from "./Service";
import Booking from "./Booking";
import SignUp from "./SignUp";
import ErrorPage from "./ErrorPage";

class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">NIAJIRI-APP</Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>

                  <Nav.Link as={Link} to={"/service"}>
                    Service
                  </Nav.Link>

                  <Nav.Link as={Link} to={"/booking"}>
                    Booking
                  </Nav.Link>

                  <Nav.Link as={Link} to={"/signup"}>
                    SignUp
                  </Nav.Link>

                  <Nav.Link as={Link} to={"/login"}>
                    Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );
  }
}

export default NavbarComp;
