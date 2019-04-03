export const GET_INGREDIENTS = 'GET_INGREDIENTS'
export const GET_USER_INGREDIENTS = 'GET_USER_INGREDIENTS'
export const SAVE_INGREDIENT = 'SAVE_INGREDIENT'
export const ING_USER_HAS = 'ING_USER_HAS'
export const ING_USER_DOESNT_HAVE = 'ING_USER_DOESNT_HAVE'
export const CHANGE_CLICKED = "CHANGE_CLICKED"
export const SAVE_USER_INGREDIENTS = "SAVE_USER_INGREDIENTS"
export const CLEAR_INGREDIENTS = "CLEAR_INGREDIENTS"
export const USERS_INGREDIENTS = "USERS_INGREDIENTS"
export const GET_RECIPE_INGREDIENTS = 'GET_RECIPE_INGREDIENTS'
export const ADD_ING_TO_USER_ING = 'ADD_ING_TO_USER_ING'
export const DELETE_USER_ING = 'DELETE_USER_ING'


export function ingredientAPIRequest(url, type) {
  return dispatch => {
    fetch(url)
      .then( res => res.json() )
      .then( data => {
        const newData = data.map( ingredient => {
          return {...ingredient, clicked: false}
        })
        dispatch(getIngredients(type, newData))
      })
      // .then(() => console.log(this.user))
  }
} // end of ingredientAPIRequest()

export function recipeIngAPIRequest(url, type) {
  return dispatch => {
    fetch(url)
      .then( res => res.json() )
      .then( data => dispatch(getRecipeIngs(type, data)) )
  } // end of return dispatch
} // end of ingredientAPIRequest()

export function changeClicked(ingId) {
  return {
    type: CHANGE_CLICKED,
    payload: ingId
  }
} // end of changeClicked(ingId)

export function saveUserIngredients(data) {
  return {
    type: SAVE_USER_INGREDIENTS,
    payload: data
  }
} // end of saveUserIngredients()

export function clearIngredients() {
  return {
    type: CLEAR_INGREDIENTS
  }
} // end of clearIngredients()

export function getIngredients(type, data) {
  return {
    type: type,
    payload: data
  }
} // end of getIngredients(data)

export function getRecipeIngs(type, data) {
  return {
    type: type,
    payload: data
  }
} // end of getRecipeIngs(type, data)

export function saveIngredient(ingredient) {
  return dispatch => dispatch({
    type: SAVE_INGREDIENT,
    payload: ingredient
  })
} // end of saveIngredient(ingredient)

export function usersIngredients(ingredients) {
  return {
    type: USERS_INGREDIENTS,
    payload: ingredients
  }
} // end of usersIngredients(ingredients)

export function addIngToUserIng(userId, ingredient) {
  return {
    type: ADD_ING_TO_USER_ING,
    payload: { userId: userId, ingredient: ingredient }
  }
}

export function deleteUserIng(userId, ingredient) {
  return {
    type: DELETE_USER_ING,
    payload: { userId: userId, ingredient: ingredient }
  }
}
