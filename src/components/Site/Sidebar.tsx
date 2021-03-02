import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Lists from "../Lists/ListsDisplay";
import Monsters from "../Monster/MonsterDisplay";
import Item from "../Items/ItemDisplay";
import CreateList from "../Lists/CreateList";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

interface AcceptedProps {
  getToken: any;
}

class Sidebar extends Component<AcceptedProps> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {};
  }




  render() {
    return (
      <div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem>
            <Link className="link" to="/lists">
              Lists
            </Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link className="link" to="/monsters">
              Monsters
            </Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link className="link" to="/items">
              Items
            </Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link className="link" to="/create-list">
              Create List
            </Link>
          </ListItem>
          <Divider />
        </List>

        <div className="sidebar">
          <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
              <li className="sidebar-li">
                <Link className="link" to="/lists">
                  Lists
                </Link>
              </li>
              <li className="sidebar-li">
                <Link className="link" to="/monster">
                  Monsters
                </Link>
              </li>
              {/* <li className="sidebar-li">
              <Link className="link" to="/item">Items</Link>
            </li> */}
              <li className="sidebar-li">
                <Link className="link" to="/create-list">
                  Create List
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-route">
            <Switch>
              <Route exact path="/lists">
                <Lists getToken={this.props.getToken} />
              </Route>
              <Route exact path="/monster">
                <Monsters />
              </Route>
              <Route exact path="/item">
                <Item />
              </Route>
              <Route exact path="/create-list">
                <CreateList getToken={this.props.getToken} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
