import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import List from '../Fetch/List';
import Monster from '../Fetch/Monster';
import Item from '../Fetch/Item';


function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/list">List</Link></li>
                    <li><Link to="/monster">Monsters</Link></li>
                    <li><Link to="/item">Items</Link></li>
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/list"><List /></Route>
                    <Route exact path="/monster"><Monster /></Route>
                    <Route exact path="/item"><Item /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;