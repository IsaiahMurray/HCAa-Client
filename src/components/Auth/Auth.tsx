import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Signup from "./Signup";
import Login from "./Login";
import { Grid, Button, Paper } from "@material-ui/core/";

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
    this.loginToggle = this.loginToggle.bind(this);
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
        <Paper className={""}>
          <Signup loginToggle={this.loginToggle} updateToken={this.props.updateToken} />
          <br/>
        </Paper>
      </Grid>
    ) : (
      <Grid id="login-signup" item xs={12} sm={6} className="login-col">
        <Paper className={""}>
          <Login loginToggle={this.loginToggle} updateToken={this.props.updateToken} />
          <br/>
        </Paper>
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
      </div>
    );
  }
}

export default Auth;
