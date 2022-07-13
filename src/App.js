import './App.css';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Books from './components/Books';

function App() {
  return (
    <Provider store={store}>
      <div>
        <nav
          style={{
            paddingBottom: '1rem',
            marginTop: '1rem',
          }}
        >
          <Link to="/">Books</Link>
          {' '}
          |
          {' '}
          <Link to="/categories">Categories</Link>
        </nav>
        <Books />
      </div>
    </Provider>
  );
}

export default App;
