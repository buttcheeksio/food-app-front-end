import { GET_RECIPES } from '../actions/recipesActions'
// import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'
// import { reducer as formReducer } from 'redux-form'

export default function recipesReducer(state = [], {type, payload}) {
  switch (type) {
    case GET_RECIPES:
      return payload
    default:
      return state
  }
} // end of ingredientsReducer
