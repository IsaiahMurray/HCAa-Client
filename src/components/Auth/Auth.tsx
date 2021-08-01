import React, {ChangeEventHandler, ChangeEvent} from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Grid, Paper, Button } from "@material-ui/core/";

type LoginState = {
  login: boolean;
}

type AcceptedProps = {
  updateToken: (token: string) => void;
}

class Auth extends React.Component<AcceptedProps, LoginState> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      login: true,
    };
    this.loginToggle = this.loginToggle.bind(this);
  }

  loginToggle = (event: React.MouseEventHandler<HTMLAnchorElement>) => {
    //event.preventDefault();

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
          <Login updateToken={this.props.updateToken} />
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
          {/* <Button onClick={this.loginToggle}></Button> */}
        </Grid>
      </div>
    );
  }
}

export default Auth;
