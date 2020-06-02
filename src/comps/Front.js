import React, { Component } from "react";
import "./Front.css";

//Bootstrap - for nav
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Jumbotron from "react-bootstrap/Jumbotron";

export default class Front extends Component {
  render() {
    return (
      <div className="frontMain">
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Jumbotron fluid className="frontMain">
          <div className="myName">Hi, my name is Nesan.</div>

          <div className="myFrom">I'm from</div>
        </Jumbotron>
      </div>
    );
  }
}
