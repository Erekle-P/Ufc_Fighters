import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Men">Men`s Division</Link></li>
        <li><Link to="/Women">Women`s Division</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
