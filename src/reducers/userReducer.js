import { UPDATE_USER, SHOW_ERROR, GET_USERS_INGREDIENTS } from '../actions/userActions'
// import { GET_INGREDIENTS } from '../actions/ingredientsActions'

export default function userReducer(state = {}, { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return payload.user
    case SHOW_ERROR:
      return payload.user
    case GET_USERS_INGREDIENTS:
      return {
        ...state,
        ingUserDoesntHave: ["butts"],
        ingUserHas: payload
       }
    default:
      return state
  }
}


//
// export default function ingredientsReducer(state = { all: [], saved: [], userIngredients: [] }, { type, payload }) {
//   switch (type) {
//     case GET_INGREDIENTS:
//       return {
//         ...state,
//         all: payload
//        }
//     case SAVE_INGREDIENT:
//       return {
//         ...state,
//         saved: [...state.saved, payload]
//       }
//     case GET_USER_INGREDIENTS:
//       return {
//         ...state,
//         userIngredients: [...state.userIngredients, payload]
//       }
//
//     default:
//       return state
//   }
// } // end of ingredientsReducer
