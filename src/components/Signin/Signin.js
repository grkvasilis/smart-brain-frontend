import React, { Component } from "react";
import "./Signin.css";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinEmail: "",
      signinPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signinEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signinPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://blooming-harbor-62611-724d0ef32092.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signinEmail,
        password: this.state.signinPassword,
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
    const { onRouteChange } = this.props;
    return (
      <div className="sign-in">
        <form>
          <div className="form-header">
            <p className="dot"></p>
            <h1>Sign In</h1>
          </div>
          <div className="inputs">
            <label htmlFor="email">Email</label>
            <input
              className="sign-in-input"
              type="email"
              name="email"
              placeholder="john@example.com"
              onChange={this.onEmailChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor="password">Password</label>
            <input
              className="sign-in-input"
              type="password"
              name="password"
              placeholder="●●●●●●●●"
              onChange={this.onPasswordChange}
            />
          </div>
          <div className="inputs">
            <input
              className="sign-in-submit sign-in-input"
              type="submit"
              value="Sign In"
              onClick={(event) => {
                event.preventDefault();
                this.onSubmitSignIn();
              }}
            />
            <p onClick={() => onRouteChange("register")}>Register</p>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
