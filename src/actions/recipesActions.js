export const GET_RECIPES = 'GET_RECIPES'
const recipesURL = `http://localhost:3000/api/v1/recipes`

export function recipeAPIRequest() {
  return dispatch => {
    fetch(recipesURL)
      .then( res => res.json() )
      .then( data => {
        dispatch(getRecipes(data))
      })
  }
} // end of apiRequest()

function getRecipes(data) {
  return {
    type: GET_RECIPES,
    payload: data
  }
} // end of getIngredients(data)
