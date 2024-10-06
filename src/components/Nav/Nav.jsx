import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header>
      <div className="logo">
        <img src="./imgs/prod/logo.png" alt="" />
      </div>
      <nav>
        <a href="#app-ol">
          <span>Home</span>
        </a>
        <a href="#about">
          <span>About</span>
        </a>
        <a href="#info">
          <span>Info</span>
        </a>
        <a href="#contact">
          <span>Contact</span>
        </a>
        {/* <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link to="/info">
          <span>Info</span>
        </Link>
        <Link to="/contact">
          <span>Contact</span>
        </Link> */}
      </nav>
    </header>
  );
};
