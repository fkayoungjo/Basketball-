import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="navbar">
      <Link to="/">
        <li className="navitem">Home</li>
      </Link>
      <Link to="/play">
        <li className="navitem">Play</li>
      </Link>
      <Link to="/leaderboard">
        <li className="navitem">Leaderboard</li>
      </Link>
    </ul>
  );
};

export default NavBar;
