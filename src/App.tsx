import React, { Component } from "react";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/Site/Navbar";
import Footer from "./components/Site/Footer";
// import Sidebar from "./components/Site/Sidebar";
import Auth from "../src/components/Auth/Auth";
import Display from "./components/Site/Display";

class App extends Component<{},{token: any}> {
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

  getToken(){
    return this.state.token;
  }

  render() {
    const isLoggedIn = this.state.token;

    let view;

    if (isLoggedIn) {
     view = <Display getToken={this.getToken} deleteToken={this.deleteToken} updateToken={this.updateToken}/>;
      // view = <div>Worked</div>
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

// export const App = () => {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const updateToken = (token: string) => {
//     localStorage.setItem("token", token);
//     setToken(token);
//   };

//   const deleteToken = () => {
//     localStorage.removeItem("token");
//     setToken("");
//   };

//   return (
//     <div className="App">
//       {token ? (
//         <div>
//           <Display deleteToken={deleteToken}/>
//           <Footer />
//         </div>
//       ) : (
//         <div>
//           <Auth updateToken={updateToken} />
//           <Footer />
//         </div>
//       )}
//     </div>
//   );
// };

export default App;
