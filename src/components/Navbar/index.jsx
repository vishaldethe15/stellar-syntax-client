import React from "react";
import NavLinks from "./NavLinks";
import { useGlobalContext } from "../../Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { width, toggleMenu } = useGlobalContext();

  return (
    <header id="header">
      <h1>
        <Link to="/">Stellar Syntax</Link>
      </h1>
      <NavLinks />
      <nav className="main">
        <ul>
          {width <= 1280 ? (
            <li className="menu">
              <a className="fa-bars" onClick={toggleMenu}>
                Menu
              </a>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
