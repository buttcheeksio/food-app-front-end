import { GET_RECIPES, CREATE_RECIPE } from '../actions/recipesActions'

export default function recipesReducer(state = [], {type, payload}) {
  switch (type) {
    case GET_RECIPES:
      return payload
    case CREATE_RECIPE:
      return [...state, payload]
    default:
      return state
  }
} // end of ingredientsReducer
