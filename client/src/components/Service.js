import React, { Component } from "react";
import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";


import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";

import "./Service.css";

class Service extends Component {
  render() {
    return (
      <Row xs={3} md={8} className="g-5">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Joy Kemunto</Card.Title>
                <Card.Text>
                  hair dresser
                  
                  <Button variant="info"><Nav.Link as={Link} to={"/booking"}>
                    BOOK
                  </Nav.Link>
                  </Button>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Service;
