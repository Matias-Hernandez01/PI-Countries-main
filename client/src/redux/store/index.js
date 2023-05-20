import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// const composeEnhancer =
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
  /* composeEnhancer(applyMiddleware(thunkMiddleware)*/
);
// );

export default store;
