const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];
let currentId = 0;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}

export function add(newBook) {
  const action = {
    type: ADD,
    payload: {
      ...newBook,
      id: currentId,
    },
  };

  currentId += 1;

  return action;
}

export function remove(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}
