import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/"> Home </Link>
            <Link to="/favorites"> Favorites </Link>
            <Link to="Coin"> Coins </Link>
        </nav>
    )               //top 10 coins? ONLY! if MVP is done first! Also could add styling to CSS file.
}

export default NavBar;