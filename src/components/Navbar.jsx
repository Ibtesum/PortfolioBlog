import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink className="navbar-link" to="/">
            HM
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/blog">
            Aninda's Blog
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/contacts">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/about">
            About
          </NavLink>
        </li>
        <div className="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search this blog"
          />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
