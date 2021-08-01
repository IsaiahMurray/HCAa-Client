import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import {Button, Grid, Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    height: '90%'
  },
  card: {
    borderRadius: "10%",
    justifyContent: "center",
    marginTop: "10vh",
    boxShadow: "5px 5px 10px grey",

    //! Styling alterations for screen breakpoints
    //* Mobile
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      width: "100vw",
      height: "100vh",
      borderRadius: "0%",
      boxShadow: "0px 0px 0px white"
    },
    //* Tablet/Desktop
    [theme.breakpoints.up("md")]: {
      width: "30vw",
      height: "80vh",
    },
    //* Desktop and higher
    [theme.breakpoints.up("lg")]: {
      width: "30vw",
      height: "80vh",
    }
  },
  title: {
    marginBottom: 0,
    marginTop: '10%',
  },
  signupFields: {
    height: "100%",
    width: "100%",
  },
  button: {
    marginTop: 0,
  }
}));

type AcceptedProps = {
  updateToken: (token: string) => void
}

const Auth = (props: AcceptedProps) => {
  const classes = useStyles();
  const [login, setLogin] = useState(true);

  const title = () => {
    return login ? "Login" : "Signup";
  };

  const loginToggle = () => {
    setLogin(!login);
  };

  const signupFields = () =>
    !login ? (
      <Grid id="login-signup" item className={classes.signupFields}>
        <h2 className={classes.title}>{title()}</h2>
        <Register updateToken={props.updateToken} />
      </Grid>
    ) : (
      <Grid id="login-signup" item className={classes.signupFields}>
        <h2 className={classes.title}>{title()}</h2>
        <Login updateToken={props.updateToken} />
      </Grid>
    );

  return (
    <Container id="container" className={classes.card}>
      <Grid
        id="login-signup-grid"
        className={classes.root}
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {signupFields()}
        <br />
      </Grid>
      <Button
        className={classes.button}
        id="toggle-button"
        onClick={loginToggle}
      >
        {!login ? "Login here!" : "Register here!"}
      </Button>
    </Container>
  );
};
export default Auth;