import React, { useState, useEffect } from "react";
import axios from "axios";
 import "../styles/Header.css";

const Header = () => {
 

  return (
<header className="header">
        <h1>Welcome to Mytalorzone</h1>
        <nav className="nav-header">
          <a href="/" className="nav-link">Home</a>
          <a href="/shop" className="nav-link">Shop</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
        <input
          type="text"
          placeholder="Search for products..."
          className="search-bar"
        />
      </header>

    
  );
};

export default Header;
