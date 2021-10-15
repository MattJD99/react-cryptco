import React from "react";
import { NavLink } from "react-router-dom";
// import { Switch, Route } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">
                <NavLink exact to="/home">Top 100</NavLink>
                <NavLink to="/search">Search</NavLink>
                {/* <Switch>
                    <Route> */}
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    {/* </Route>
                </Switch> */}
        </div> 
        )
    }
export default NavBar;