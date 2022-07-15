import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add as addNewBook, postBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({ category: 'Technology' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setBook((book) => ({
      ...book,
      [event.target.name]: event.target.value,
    }));
    dispatch(postBook(book))
      .then(() => {
        dispatch(addNewBook(book));
      });
  };

  const handleInputChange = (event) => {
    setBook((book) => ({
      ...book,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className="form__container" onSubmit={handleSubmit}>
      <h1>ADD NEW BOOK</h1>
      <input placeholder="title" onChange={handleInputChange} name="title" />
      <input placeholder="author" onChange={handleInputChange} name="author" />
      <button id="submit__button" type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
