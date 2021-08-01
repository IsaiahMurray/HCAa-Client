import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Site/Footer";
import Auth from "../src/components/Auth/Auth";
import Display from "./components/Site/Display";
import 'bootstrap/dist/css/bootstrap.min.css';
import APIURL from './helpers/environment';

type AppState = {
  token: null | string;
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.updateToken = this.updateToken.bind(this);
    this.deleteToken = this.deleteToken.bind(this);
    this.getToken = this.getToken.bind(this);
    this.state = { token: null };
  }

  componentDidMount(){
    if(localStorage.getItem("token")){
      this.setState({
        token: localStorage.getItem("token")
      })
    }
  }

  updateToken(userToken: string) {
    this.setState({ token: userToken });
    localStorage.setItem("token", userToken);
  }

  deleteToken() {
    this.setState({ token: null });
    localStorage.clear()
  }

  getToken() {
    return this.state.token;
  }

  render() {
    let view;

    if (this.state.token) {
      view = (
        <Display
          getToken={this.getToken}
          deleteToken={this.deleteToken}
          updateToken={this.updateToken}
        />
      );
    } else {
      view = <Auth updateToken={this.updateToken} />;
    }

    return (
      <div className="App">
        <div>
          {view}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
