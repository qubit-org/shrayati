import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <header>
      <div className="logo">
        <img src="./imgs/prod/logo.png" alt="" />
      </div>
      <nav>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link to="/info">
          <span>Info</span>
        </Link>
        <Link>
          <span>Contact</span>
        </Link>
      </nav>
    </header>
  );
};
