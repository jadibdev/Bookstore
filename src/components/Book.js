import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove as removeBook, removeBookById } from '../redux/books/books';
import progressCircle from '../assets/progress-icon.jpeg';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBookById(id))
      .then(() => dispatch(removeBook(id)));
  };

  const generate = () => {
    const percentage = Math.floor(Math.random() * 100);
    return percentage;
  };

  return (
    <div className="book__container">
      <div className="book__info">
        <p id="category">{category}</p>
        <h1 id="title">{title}</h1>
        <p id="author">{author}</p>
        <button type="button" onClick={handleDelete}>
          Remove
        </button>
      </div>
      <div className="percentage__container">
        <img id="progress-circle" alt="pending icon" src={progressCircle} />
        <div className="percentage__info">
          <p>
            {
            generate()
            }
            %
          </p>
          <p>completed</p>
        </div>
      </div>
      <div className="chapters">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button id="update__button" type="button">Update Progress</button>
      </div>
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
