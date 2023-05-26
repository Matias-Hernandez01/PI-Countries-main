import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Landing, Home, Form, Detail, NotFound, Bienvenida } from './views';
import Activities from './components/Activities/Activities';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/activities' component={Activities} />
        <Route exact path='/bienvenida' component={Bienvenida} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/detail/:id' component={Detail} />
        <Route exact path='/create' component={Form} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
