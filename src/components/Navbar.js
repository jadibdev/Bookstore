import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/profile-avatar.png';

const Navbar = () => (
  <div className="navbar__container">
    <div>
      <nav className="navbar">
        <Link className="navlink" id="logo" to="/">Bookstore CMS</Link>
        <Link className="navlink nav" to="/">Books</Link>
        <Link className="navlink nav" to="/categories">Categories</Link>
      </nav>
    </div>
    <div>
      <img id="profile-pic" alt="profile pic" src={logo} />
    </div>
  </div>
);

export default Navbar;
