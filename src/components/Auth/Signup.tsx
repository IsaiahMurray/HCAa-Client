import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const log = console.log

interface UserData{
    email: string,
    password: string
}
 
interface AcceptedProps {
    updateToken: (token: string) => void;
  }

class Signup extends React.Component<AcceptedProps, UserData>{

    constructor(props: AcceptedProps){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }    

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch("http://hca-server.herokuapp.com/user/create", {
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
            log("data", data);
            this.props.updateToken(data.sessionToken);
            log("user has been created!")
            
          });
      };
      render(){
  return (
    <div>
      <form id="login-signup-form" onSubmit={this.handleSubmit}>
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
          Sign Up
        </Button>
      </form>
    </div>
  );}
};

export default Signup;
