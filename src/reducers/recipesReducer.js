import { GET_RECIPES } from '../actions/recipesActions'

export default function recipesReducer(state = [], {type, payload}) {
  switch (type) {
    case GET_RECIPES:
      return payload
    default:
      return state
  }
} // end of ingredientsReducer
