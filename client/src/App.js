import './App.css';
import { Route } from 'react-router-dom';
import { Landing, Home, Form, Detail } from './views';
import NavBar from './components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';
import Bienvenida from './views/Bienvenida/Bienvenida';
import Activities from './components/Activities/Activities';
import NotFound from './views/NotFound/NotFound';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      {location.pathname !== '/' && location.pathname !== '/bienvenida' && (
        <NavBar />
      )}
      <Route exact path='/activities' component={Activities} />
      <Route exact path='/bienvenida' component={Bienvenida} />
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home} />
      <Route exact path='/create' component={Form} />
      <Route exact path='/detail/:id' component={Detail} />
      <Route exact path='*' component={NotFound} />
    </div>
  );
}

export default App;
