import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSumbitRegister = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          this.props.onLoadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <div className="register">
        <form>
          <div className="form-header">
            <p className="dot"></p>
            <h1>Register</h1>
          </div>
          <div className="inputs">
            <label htmlFor="name">Name</label>
            <input
              className="register-input"
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={this.onNameChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email</label>
            <input
              className="register-input"
              type="email"
              name="email"
              placeholder="john@example.com"
              onChange={this.onEmailChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor="password">Password</label>
            <input
              className="register-input"
              type="password"
              name="password"
              placeholder="●●●●●●●●"
              onChange={this.onPasswordChange}
            />
          </div>
          <div className="inputs">
            <input
              className="register-submit register-input"
              type="submit"
              value="Register"
              onClick={(event) => {
                event.preventDefault();
                this.onSumbitRegister();
              }}
            />
            <p onClick={() => this.props.onRouteChange("signin")}>Sign In</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
