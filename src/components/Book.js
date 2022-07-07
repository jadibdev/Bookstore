/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
};

Screen.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;