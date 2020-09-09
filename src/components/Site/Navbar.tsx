import React, {Component, MouseEvent} from "react";

// interface AcceptedProps  {
//   deleteToken: () => void;
// };

class Navbar extends Component{
  // handleClick(event: MouseEvent){
  //   log("token:", localStorage.getItem("token"))
  //   localStorage.removeItem("token");
  //   log("token:", localStorage.getItem("token"))
  // }

  render(){
  return (
    <div>
      <h1>Navbar Component</h1>
      {/* <button onClick={this.handleClick}>Logout</button> */}
    </div>
  )
  }
};

export default Navbar;
