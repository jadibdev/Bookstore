import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import BooksList from './BooksList';
import BookForm from './BookForm';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <section className="container mx-auto">
      {
        books.isFaild
          ? <div>Faild</div>
          : (
            <>
              {
                books.isLoading
                  ? <div>Loading...</div>
                  : books && books.items && <BooksList books={books.items} />
              }
            </>
          )
      }
      <BookForm />
    </section>
  );
};

export default Books;
