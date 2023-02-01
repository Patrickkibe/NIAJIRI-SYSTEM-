import React, { Component } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
export default class Login extends Component {
  render() {
    return (
        
      <div>
        <FloatingLabel controlId="floatingInput">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email Adreess e.g JohnDoe@gmail.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password..." />
            </Form.Group>

            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </FloatingLabel>
      </div>
    );
  }
}
