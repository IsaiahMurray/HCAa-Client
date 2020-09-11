import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Site/Navbar";

class Display extends Component<{ deleteToken: any; getToken: any; updateToken: any },{}> {
  
  render() {
    return (
      <div>
        <Navbar deleteToken={this.props.deleteToken}/>
        <Router>
          <Sidebar getToken={this.props.getToken} />
        </Router>
      </div>
    );
  }
}

export default Display;
