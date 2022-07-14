import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove as removeBook, removeBookById } from '../redux/books/books';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBookById(id))
      .then(() => dispatch(removeBook(id)));
  };

  return (
    <div className="book__container">
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{category}</p>
      <button type="button" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
