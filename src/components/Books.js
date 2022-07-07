import React from 'react';
import Book from './Book';
import BookInput from './BookInput';

const Books = () => (
  <div>
    <Book title="The Pragmatic Programmer" author="by Andy Hunt and Dave Thomas" />
    <button type="button">Remove</button>
    <BookInput />
  </div>
);

export default Books;
