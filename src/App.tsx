import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Site/Footer";
import Auth from "../src/components/Auth/Auth";
import Display from "./components/Site/Display";
import 'bootstrap/dist/css/bootstrap.min.css';
import APIURL from './helpers/environment';

class App extends Component<{}, { token: any }> {
  constructor(props: any) {
    super(props);
    this.updateToken = this.updateToken.bind(this);
    this.deleteToken = this.deleteToken.bind(this);
    this.getToken = this.getToken.bind(this);
    this.state = { token: null };
  }

  updateToken(userToken: string) {
    this.setState({ token: userToken });
  }

  deleteToken() {
    this.setState({ token: null });
  }

  getToken() {
    return this.state.token;
  }

  render() {
    const isLoggedIn = this.state.token;

    let view;

    if (isLoggedIn) {
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
