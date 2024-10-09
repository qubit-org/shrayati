import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import "./SideNav.css";

const SideNav = ({ isOpen, onClose }) => {
  return (
    <div 
      id='side-nav' 
      style={{ right: isOpen ? '0' : '-700px' }} // Adjust right value based on isOpen prop
    >
      <div className="close-ico" onClick={onClose}>
        <CloseIcon />
      </div>
      <div className="s-menu">
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
      </div>
    </div>
  );
}

export default SideNav;
