import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Site/Navbar";
import Footer from "./components/Site/Footer";
import Sidebar from "./components/Site/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
