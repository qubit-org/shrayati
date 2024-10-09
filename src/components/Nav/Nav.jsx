import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SideNav from './SideNav'; // Ensure SideNav is correctly imported

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the side nav is open

  const handleToggle = () => {
    setIsOpen(prev => !prev); // Toggle the state
  };

  const handleClose = () => {
    setIsOpen(false); // Function to close the side nav
  };

  return (
    <>
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
          <a href="https://darkgray-donkey-340304.hostingersite.com/shop/" target="_blank" rel="noopener noreferrer">
            <span>Shop</span>
          </a>
          <a href="#info">
            <span>Info</span>
          </a>
          <a href="#contact">
            <span>Contact</span>
          </a>
        </nav>
        <div id="toggle-btn" onClick={handleToggle}>
          <MenuIcon />
        </div>
      </header>
      {/* Render the SideNav with isOpen state and handleClose function passed as props */}
      <SideNav isOpen={isOpen} onClose={handleClose} />
    </>
  );
};
