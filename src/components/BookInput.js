import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/books';

const BookInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  return (
    <div style={{ marginTop: '2rem' }}>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(add({
          title: e.target.elements.title.value,
          author: e.target.elements.author.value,
        }));
      }}
      >
        <input value={title} type="text" placeholder="Title" required name="title" onChange={(event) => setTitle(event.target.value)} />
        <input value={author} type="text" placeholder="Author" required name="author" onChange={(event) => setAuthor(event.target.value)} />
        <button
          type="submit"
        >
          Add new book
        </button>
      </form>
    </div>
  );
};

export default BookInput;
