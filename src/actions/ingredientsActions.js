export const GET_INGREDIENTS = 'GET_INGREDIENTS'
const ingredientsURL = `http://localhost:3000/api/v1/ingredients`

export function apiRequest() {
  return dispatch => {
    fetch(ingredientsURL)
      .then( res => res.json() )
      .then( data => {
        dispatch(getIngredients(data))
      })
  }
} // end of apiRequest()

function getIngredients(data) {
  return {
    type: GET_INGREDIENTS,
    payload: data
  }
} // end of getIngredients(data)
