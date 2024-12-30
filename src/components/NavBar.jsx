import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Men">Men%apos;s Division</Link></li>
        <li><Link to="/Women">Women%apos;s Division</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
