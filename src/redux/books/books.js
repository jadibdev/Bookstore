/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import uuidv4 from 'react-uuid';
import booksService from '../../services/booksService';

const initialState = {
  isLoading: false,
  isFaild: false,
  items: [],
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const { data } = await booksService.getAll();
    return data;
  },
);

export const postBook = createAsyncThunk(
  'books/postBook',
  async (book) => {
    const newBook = {
      ...book,
      item_id: uuidv4(),
    };

    const { data } = await booksService.create(newBook);

    return data;
  },
);

export const removeBookById = createAsyncThunk(
  'books/removeBookById',
  async (bookId) => {
    const { data } = await booksService.remove(bookId);

    return data;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add(state, action) {
      const newBook = {
        ...action.payload,
        item_id: uuidv4(),
      };

      state.items.push(newBook);
    },
    remove(state, action) {
      const newItems = current(state).items.filter(({ item_id }) => item_id !== action.payload);

      state.items = newItems;
    },
  },
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      const books = Object.keys(action.payload).map((key) => ({
        ...action.payload[key][0],
        item_id: key,
      }));

      state.isLoading = false;
      state.items = books;
    },
    [fetchBooks.pending]: (state) => { state.isLoading = true; },
    [fetchBooks.rejected]: (state) => { state.isFaild = true; },
  },
});

export const { add, remove } = booksSlice.actions;

export default booksSlice.reducer;
