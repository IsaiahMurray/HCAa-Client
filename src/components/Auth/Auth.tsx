import React from "react";

import Signup from "./Signup";
import Login from "./Login";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

interface LoginCheck {
  login: boolean;
}

interface AcceptedProps {
  updateToken: (token: string) => void;
}

class Auth extends React.Component<AcceptedProps, LoginCheck> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      login: true,
    };
  }

  loginToggle = (event: any) => {
    event.preventDefault();

    this.setState({
      ...this.state,
      login: !this.state.login,
    });
  };

  signupFields = () =>
    !this.state.login ? (
      <Grid id="login-signup" item xs={12} sm={6}>
        <Signup updateToken={this.props.updateToken} />
      </Grid>
    ) : (
      <Grid id="login-signup" item xs={12} sm={6} className="login-col">
        <Login updateToken={this.props.updateToken} />
      </Grid>
    );
  render() {
    return (
      <div className="auth-container">
        <h1 id="hca">Hunter's Companion</h1>
        <Grid
          id="login-signup-grid"
          className="auth-grid"
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {this.signupFields()}
          <br />
        </Grid>
        <div>
          <div id="button-color-wrap">
            <Button id="toggle-button" onClick={this.loginToggle}>
              {!this.state.login ? "Login here!" : "Signup here!"}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
