import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import APIURL from "../../helpers/environment";
const log = console.log;

type UserData = {
  email: string;
  password: string;
}

type AcceptedProps = {
  updateToken: (token: string) => void;
  
}

class Signup extends React.Component<AcceptedProps, UserData> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch(`${APIURL}/user/create`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
    const data = await res.json();
    this.props.updateToken(data.sessionToken);
    console.log("User has successfully been created! Woohoo!");
  };
  render() {
    return (
      <div id="inner-auth-div">
        <form id="login-signup-form" onSubmit={this.handleSubmit}>
          <h2 id="login-signup-header">Signup</h2>
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
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;
