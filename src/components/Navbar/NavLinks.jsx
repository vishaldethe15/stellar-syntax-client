import React from "react";
import { navLinks } from "./navLinks.js";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="links">
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
