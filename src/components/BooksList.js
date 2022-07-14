/* eslint-disable camelcase */
import React from 'react';
import { PropTypes } from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => (
  <div>
    {books.map(({
      item_id, title, author, category,
    }) => (
      <Book key={item_id} id={item_id} title={title} author={author} category={category} />
    ))}
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};

BooksList.defaultProps = {
  books: [],
};

export default BooksList;
