import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/books';

const BookInput = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: '2rem' }}>
      <input type="text" placeholder="Title" required />
      <input type="text" placeholder="Author" required />
      <button 
      type="submit" 
      onClick={() => {
        console.log() 
        dispatch(add())
        }}>
        Add new book
        </button>
    </div>
  );
};

export default BookInput;
