import React from "react";

//Styles
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import APIURL from "../../helpers/environment";

const log = console.log;

interface UserData {
  email: string;
  password: string;
}

interface AcceptedProps {
  updateToken: (token: string) => void;
  loginToggle: (event: any) => void;
}

class Login extends React.Component<AcceptedProps, UserData> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    log("Submitted form");
    fetch(`${APIURL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.updateToken(data.sessionToken);
        log("Logged in!");
      })
      .catch(err => {
        log(err);
        alert("Weewoo! Who are you?! Identify yourself!!!");
      })
  };

  render() {
    return (
      <div id="inner-auth-div">
        <form id="login-signup-form" onSubmit={this.handleSubmit}>
          <h2 id="login-signup-header">Login</h2>
          <TextField
            className="textfield"
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Email"
            onChange={(e) =>
              this.setState({ ...this.state, email: e.target.value })
            }
            name="email"
            value={this.state.email}
            autoFocus
          />
          <br />
          <TextField
            className="textfield"
            variant="outlined"
            margin="normal"
            required
            label="Password"
            type="password"
            id="password"
            onChange={(e) =>
              this.setState({ ...this.state, password: e.target.value })
            }
            name="password"
            value={this.state.password}
          />
          <br />
          <Button id="login-signup-button" type="submit">
            Log In
          </Button>
          <br />
          <br/>
          <Button onClick={this.props.loginToggle}>Signup here!</Button>
          <br/>
        </form>
      </div>
    );
  }
}

export default Login;
