const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [{
  id: 0,
  title: 'Zero To One',
  author: 'Peter Thiel',
},
{
  id: 1,
  title: 'Hit Refresh',
  author: 'Satya Nadella',
},
];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
