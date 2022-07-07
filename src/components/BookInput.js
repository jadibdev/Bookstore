import React from 'react';

const BookInput = () => (
  <div style={{ marginTop: '2rem' }}>
    <input type="text" placeholder="Title" />
    <input type="text" placeholder="Author" />
    <button type="submit">Add new book</button>
  </div>
);

export default BookInput;
