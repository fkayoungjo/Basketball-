import React from "react";
import { NavLink } from "react-router-dom";
import pic from "./58428defa6515b1e0ad75ab4.png"
const NavBar = (props) => {
  return (
    <div className="header">
    <ul className="navbar">
    <img src={pic} className='image' alt="logo" width="125" height="85"/>
    <h1 className='title' >Matchup Simulator</h1>
      <NavLink to="/">
        <li className="navitem">Home</li>
      </NavLink>
      <NavLink to="/play" onClick={props.turnOffUc}>
        <li className="navitem">Play</li>
      </NavLink>
      <NavLink to="/leaderboard" onClick={props.handleUc}>
        <li className="navitem">Leaderboard</li>
      </NavLink>
    </ul>
    </div>
  );
};

export default NavBar;
