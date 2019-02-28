import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from "react-router-dom"

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
    user: {
      name: 'John',
      id: 1,
      ingUserDoesntHave: [],
      ingUserHas: []
    }
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

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App aRandomProps="whatever" />
    </Router>
  </Provider>,
  document.getElementById('root'));
serviceWorker.unregister();
