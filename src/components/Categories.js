import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => (
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
    <button type="button">Check Status</button>
  </div>
);

export default Categories;
