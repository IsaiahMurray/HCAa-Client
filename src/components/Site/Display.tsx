import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Site/Navbar";

class Display extends Component<{ deleteToken: any; getToken: any; updateToken: any },{}> {
  constructor(props: any) {
    super(props);
    this.getToken = this.getToken.bind(this);
    this.getLists = this.getLists.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }

  getToken() {
    this.getToken();
  }

  getLists() {
    let requestHeaders: any = {
      "Content-Type": "application/json",
      Authorization: this.getToken(),
    };
    fetch(`http://hca-server.herokuapp.com/list`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  deleteList() {
    let requestHeaders: any = {
      "Content-Type": "application/json",
      Authorization: this.getToken(),
    };
    //fetch(`http://hca-server.herokuapp.com/list/delete/${list.id}`,
    fetch(`http://hca-server.herokuapp.com/list/delete/`, {
      method: "DELETE",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.getLists();
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Sidebar deleteList={this.deleteList} getLists={this.getLists} />
        </Router>
      </div>
    );
  }
}

export default Display;
