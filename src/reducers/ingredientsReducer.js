import {
          CHANGE_CLICKED,
          GET_INGREDIENTS,
          SAVE_INGREDIENT,
          GET_USER_INGREDIENTS,
          CLEAR_INGREDIENTS,
          GET_RECIPE_INGREDIENTS,
          ADD_ING_TO_USER_ING,
          DELETE_USER_ING
        } from '../actions/ingredientsActions'

const userIngURL = `http://localhost:3000/api/v1/user_ingredients/`

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

    case ADD_ING_TO_USER_ING:
      fetch(userIngURL, {
        method: "post",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: payload.userId,
          ingredient_id: payload.ingredient.id
        })
      })
      .then( res => res.json() )

    case DELETE_USER_ING:
      fetch(userIngURL, {
        method: "delete",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: payload.userId,
          ingredient_id: payload.ingredient.id
        })
      })
      .then( res => res.json() )

    default:
      return state
  }
} // end of ingredientsReducer
