import React, { Component, useEffect, useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Lists from "../Fetch/Lists";
import Monster from "../Fetch/Monster";
import Item from "../Fetch/Item";
import List from "../Fetch/List";

const baseUrl = "https://mhw-db.com";
const log = console.log;


type Props = {
  getLists: () => void;
  deleteList: (text: List) => void;
  lists: List[];
  //  monsters: Monster[]
}

export class Sidebar extends Component {

    constructor(props: Props){
        super(props);
        this.state = {
            getList: props.getLists,
            deleteList: props.deleteList,
            lists: props.lists
        }
    }

  componentDidMount() {
    useEffect(() => {
      let url = `${baseUrl}/monsters`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          log(data);
        })
        .catch((err) => log(err));
    }, []);
  }

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
            <Route exact path="/list">
              {/* <Lists
                // getLists={}
                // lists={lists}
                // deleteList={deleteList}
              /> */}
            </Route>
            <Route exact path="/monster">
              {/* <Monster monsters={monsters} /> */}
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
