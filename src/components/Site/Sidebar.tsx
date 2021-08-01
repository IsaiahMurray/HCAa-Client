import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Lists from "../Lists/ListsDisplay";
import Monsters from "../Monster/MonsterDisplay";
import Item from "../Items/ItemDisplay";
import CreateList from "../Lists/CreateList";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import {
  Navbar,
  Nav,
  Button,
  Form,
} from "react-bootstrap";

type AcceptedProps = {
  token: string | null
}

class Sidebar extends Component<AcceptedProps, {}> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Hunter's Companion</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link className="link" to="/lists">
                  Lists
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link className="link" to="/monster">
                  Monsters
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link className="link" to="/items">
                  Items
                </Link>
              </Nav.Link>
            </Nav>
            <Form inline>
              <Button variant="outline-success">Soon to be logout</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <div className="sidebar">
          <div className="sidebar-route">
            <Switch>
              <Route exact path="/lists">
                <Lists getToken={this.props.token} />
              </Route>
              <Route exact path="/monster">
                <Monsters />
              </Route>
              <Route exact path="/item">
                <Item />
              </Route>
              <Route exact path="/create-list">
                <CreateList getToken={this.props.token} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
