import { Button } from "@material-ui/core";
import React, { Component } from "react";

// interface AcceptedProps  {
//   deleteToken: () => void;
// };

class Navbar extends Component<{ deleteToken: any }, {}> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.deleteToken();
  }

  render() {
    return (
      <nav>
        <div>
          <h1 id="hca">Hunter's Companion</h1>
        </div>
        <div>
          <Button id="logout-button" onClick={this.handleClick}>
            Logout
          </Button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
