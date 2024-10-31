import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo">
            <span>AmberClone</span>
          </div>

          <div className="nav-links">
            <a href="#">Properties</a>
            <a href="#">Cities</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <button className="sign-in-button">
              <User className="user-icon" />
              Sign In
            </button>
          </div>

          <div className="mobile-menu-button">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <a href="#">Properties</a>
            <a href="#">Cities</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <button className="mobile-sign-in">
              <User className="user-icon" />
              Sign In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;