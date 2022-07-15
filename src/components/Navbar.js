import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
      <FontAwesomeIcon id="profile-pic" icon={faUser} />
    </div>
  </div>
);

export default Navbar;
