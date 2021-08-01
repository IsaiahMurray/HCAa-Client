import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Site/Navbar";

type AcceptedProps = {
  token: string | null,
  deleteToken: () => void
}

class Display extends Component<AcceptedProps,{}> {
  
  render() {
    return (
      <div>
        <Navbar deleteToken={this.props.deleteToken}/>
        <Router>
          <Sidebar token={this.props.token} />
        </Router>
      </div>
    );
  }
}

export default Display;