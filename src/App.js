import './App.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Books from './components/Books';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <div className='class="Bookstore-CMS'>
        <Navbar />
        <Books />
      </div>
    </Provider>
  );
}

export default App;
