import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Book from './Book';
import BookInput from './BookInput';
import { remove } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {books.map((value) => (
          <li key={value.id}>
            <h2>{value.title}</h2>
            <p>{value.author}</p>
            <button type="button" onClick={() => { dispatch(remove(value.id)); }}>Remove</button>
          </li>
        ))}
      </ul>
      <BookInput />
    </div>
  );
};

export default Books;
