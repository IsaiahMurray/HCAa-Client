import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Lists from "../Fetch/Lists";
import Monsters from "../Fetch/Monsters";
import Item from "../Fetch/Item";
//import List from "../Fetch/List";

//class Sidebar extends Component<{ getLists: any; deleteList: any }>
class Sidebar extends Component<{getToken: any;}> {
  // constructor(props: any) {
  //   super(props);
  //   this.getToken = this.getToken.bind(this);
  //   //this.getLists = this.getLists.bind(this);
  //   //this.deleteList = this.deleteList.bind(this);
  // }

  // getLists() {
  //   this.getLists();
  // }

  // deleteList() {
  //   this.deleteList();
  // }

  // getToken(){
  //   return this.getToken;
  // }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-list-styling">
          <ul className="sidebar-list list-unstyled">
            <li>
              <Link to="/lists">Lists</Link>
            </li>
            <li>
              <Link to="/monster">Monsters</Link>
            </li>
            <li>
              <Link to="/item">Items</Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-route">
          <Switch>
            <Route exact path="/lists">
              {/* <Lists getLists={this.props.getLists} deleteList={this.props.deleteList}/> */}
              <Lists getToken={this.props.getToken}/>
            </Route>
            <Route exact path="/monster">
              <Monsters />
            </Route>
            <Route exact path="/item">
              <Item />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Sidebar;
