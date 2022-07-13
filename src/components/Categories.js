import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
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
      <button type="button" onClick={() => { dispatch(checkStatus()); }}>Check Status</button>
    </div>
  );
};
export default Categories;
