import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk'
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'

import { Provider } from 'react-redux'
import userReducer from './reducers/userReducer'
import ingredientsReducer from './reducers/ingredientsReducer'
import recipesReducer from './reducers/recipesReducer'


const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const allReducers = combineReducers({
  user: userReducer,
  ingredients: ingredientsReducer,
  recipes: recipesReducer
})

const store = createStore(
  allReducers,
  {
    user: 'John'
  },
  allStoreEnhancers
)

// console.log(store.getState())

// const updateUserAction = {
//   type: 'updateUser',
//   payload: {
//     user: 'Nina'
//   }
// }
//
// store.dispatch(updateUserAction)

// const action = {
//   type: 'changeState',
//   payload: {
//     newState: 'New state'
//   }
// }

// store.dispatch(action)

ReactDOM.render(<Provider store={store}><App aRandomProps="whatever" /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
