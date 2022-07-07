import './App.css';
import { Link } from 'react-router-dom';
import Books from './components/Books';

function App() {
  return (
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
  );
}

export default App;
