import {
          CHANGE_CLICKED,
          GET_INGREDIENTS,
          SAVE_INGREDIENT,
          GET_USER_INGREDIENTS,
          CLEAR_INGREDIENTS,
          GET_RECIPE_INGREDIENTS
        } from '../actions/ingredientsActions'

export default function ingredientsReducer(state = { all: [], saved: [], userIngredients: [], recipeIngredients: [] }, { type, payload }) {
  switch (type) {
    case CHANGE_CLICKED:
    return {
      ...state,
      all: state.all.map(ingredient => {
        if (ingredient.id === payload) {
          return { ...ingredient, clicked: !ingredient.clicked }
        } else {
          return ingredient
        }
      })
    }
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
    case CLEAR_INGREDIENTS:
      return {
        ...state,
        all: state.all.map(ingredient => {
          if (ingredient.clicked) {
            return { ...ingredient, clicked: false }
          } else {
            return ingredient
          }
        })
      }
    case GET_RECIPE_INGREDIENTS:
      return {
        ...state,
        recipeIngredients: [...state.recipeIngredients, payload]
      }
    default:
      return state
  }
} // end of ingredientsReducer
