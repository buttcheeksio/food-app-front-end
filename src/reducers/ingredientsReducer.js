import { GET_INGREDIENTS } from '../actions/ingredientsActions'

export default function ingredientsReducer(state = [], {type, payload}) {
  switch (type) {
    case GET_INGREDIENTS:
      return payload
    default:
      return state
  }
} // end of ingredientsReducer
