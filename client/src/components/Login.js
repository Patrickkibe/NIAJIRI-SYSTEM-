import React, { Component } from "react";

import { Link } from "react-router-dom";

import "../App.css";

export default class Login extends Component {
  render() {
    return (
      <div className="text-center m-5-auto">
        <h2 class="title">LOGIN</h2>
        <h5>Login To Account</h5>
        <form action="/home">
          <p>
            <label for="Username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              class="input"
              autocomplete="off"
              placeholder="Username..."
              name="first_name"
              required
            />
          </p>

          <p>
            <label for="emailaddress">Email-Address</label>
            <br />
            <input
              type="text"
              id="emailaddress"
              class="input"
              autocomplete="off"
              placeholder="Email Address..."
            />
          </p>

          <p>
            <label for="password">Password</label>
            <br />
            <input
              type="text"
              id="password"
              class="input"
              autocomplete="off"
              placeholder="Password..."
            />
          </p>

          <p>
            <button id="sub_btn" type="submit">
              LOGIN
            </button>
          </p>
        </form>

        <footer>
          <p>
            First time? <Link to="/signup">Create an account</Link>
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>
          </p>
        </footer>
      </div>
    );
  }
}
