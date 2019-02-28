import { GET_INGREDIENTS, SAVE_INGREDIENT, GET_USER_INGREDIENTS, TEST } from '../actions/ingredientsActions'

export default function ingredientsReducer(state = { all: [], saved: [], userIngredients: [] }, { type, payload }) {
  switch (type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        all: payload
       }
    case SAVE_INGREDIENT:
      return {
        ...state,
        saved: [...state.saved, payload]
      }
    case GET_USER_INGREDIENTS:
      return {
        ...state,
        userIngredients: [...state.userIngredients, payload]
      }
    case TEST:
      return {
        ...state,
        hasButt: payload
      }

    default:
      return state
  }
} // end of ingredientsReducer
