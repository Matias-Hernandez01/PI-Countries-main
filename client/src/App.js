import './App.css';
import { Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
function App() {
  return (
    <div className='App'>
      <Route exact path='/' Component={<Landing />}>
        <Landing />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
