import React from "react";

//Styles
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const log = console.log;

interface UserData{
    email: string,
    password: string
}
 
interface AcceptedProps {
    updateToken: (token: string) => void;
  }

class Login extends React.Component<AcceptedProps, UserData>{

    constructor(props: AcceptedProps){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = (event: any) => {
      event.preventDefault();
      log("Submitted form");
      fetch("http://hca-server.herokuapp.com/user/login", {
        method: "POST",
        body: JSON.stringify({
           email: this.state.email, password: this.state.password,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          log("data: ", data);
          this.props.updateToken(data.sessionToken);
        });
    };

    render(){
    return (
      <div>
        <form id="login-signup-form" onSubmit={this.handleSubmit}>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <br />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Email"
            onChange={(e) => this.setState({...this.state, email: e.target.value})}
            name="email"
            value={this.state.email}
            autoFocus
          />
          <br />
          <TextField
            variant="outlined"
            margin="normal"
            required
            label="Password"
            type="password"
            id="password"
            onChange={(e) => this.setState({...this.state, password: e.target.value})}
            name="password"
            value={this.state.password}
          />
          <br />
          <Button id="login-signup-button" type="submit" variant="contained" color="primary">
            Log In
          </Button>
        </form>
      </div>
    );}
  };
  
  export default Login;