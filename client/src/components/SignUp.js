import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div className="text-center m-5-auto">
        <h2>SignUp Today...</h2>
        <h5>Create your personal account</h5>

        <form action="/home">
          <p>
            <label>Username</label>
            <br />
            <input
              type="text"
              id="username"
              class="input"
              autocomplete="off"
              placeholder="Username..."
              required
            />
          </p>

          <p>
            <label>Email address</label>
            <br />
            <input
              type="email"
              id="email"
              class="input"
              autocomplete="off"
              placeholder="EmailAddress..."
              required
            />
          </p>

          <p>
            <label>Password</label>
            <br />
            <input
              type="text"
              id="password"
              class="input"
              autocomplete="off"
              placeholder="Password..."
              required
            />
          </p>

          <p>
            <button id="sub_btn" type="submit">
              SignUp
            </button>
          </p>
        </form>

        <footer>
          <p>
            <Link to="/">Back to Homepage</Link>
          </p>
        </footer>
      </div>
    );
  }
}

export default SignUp;
