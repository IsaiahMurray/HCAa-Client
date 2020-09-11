import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Lists from "../Fetch/Lists";
import Monsters from "../Fetch/Monsters";
import Item from "../Fetch/Item";
import CreateList from '../Other/CreateList';


class Sidebar extends Component<{getToken: any;}> {
  
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
            <li>
              <Link to="/create-list">Create List</Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-route">
          <Switch>
            <Route exact path="/lists">
              <Lists getToken={this.props.getToken}/>
            </Route>
            <Route exact path="/monster">
              <Monsters />
            </Route>
            <Route exact path="/item">
              <Item />
            </Route>
            <Route exact path="/create-list">
              <CreateList getToken={this.props.getToken}/>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Sidebar;
