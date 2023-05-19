import './App.css';
import { Route } from 'react-router-dom';
import { Landing, Home, Form } from './views';
import NavBar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  return (
    <div className='App'>
      {location.pathname !== '/' && <NavBar />}
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home} />
      <Route exact path='/create' component={Form} />
    </div>
  );
}

export default App;
