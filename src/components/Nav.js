import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {

  return (
    <header className="flex items-center">
      <div className="navdiv">
        <nav>
          <NavLink to="/" exact>
            About
          </NavLink>
          <NavLink to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink to="/resume">
            Skills
          </NavLink>
          <NavLink to="/contactus">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )

   }
  
  export default Nav;