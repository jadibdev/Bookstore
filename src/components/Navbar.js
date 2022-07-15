import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav
          style={{
            paddingBottom: '1rem',
            marginTop: '1rem',
          }}
        >
          <Link to="/">Books</Link>
          {' '}
          |
          {' '}
          <Link to="/categories">Categories</Link>
        </nav>
    </div>
  )
}

export default Navbar