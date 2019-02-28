export const GET_INGREDIENTS = 'GET_INGREDIENTS'
export const GET_USER_INGREDIENTS = 'GET_USER_INGREDIENTS'
export const SAVE_INGREDIENT = 'SAVE_INGREDIENT'
export const ING_USER_HAS = 'ING_USER_HAS'
export const ING_USER_DOESNT_HAVE = 'ING_USER_DOESNT_HAVE'
export const TEST = 'TEST'


export function ingredientAPIRequest(url, type) {
  return dispatch => {
    fetch(url)
      .then( res => res.json() )
      .then( data => {
        dispatch(getIngredients(type, data))
      })
      // .then(() => console.log(this.user))
  }
} // end of ingredientAPIRequest()

export function determineIngUserHas(allIngredients) {
  // return dispatch => {
  //   // if (!this.state.user.ingUserHas.length > 0) {
  //   //   console.log(this.state)
  //   // }
  // }
  console.log(allIngredients)
}

function getIngredients(type, data) {
  return {
    type: type,
    payload: data
  }
} // end of getIngredients(data)

// function ingUserHas(data) {
//   return {
//     type: ING_USER_HAS,
//     payload: data
//   }
// } // end of haveIngredients()

// function ingUserDoesntHave(data) {
//   return {
//     type: ING_USER_DOESNT_HAVE,
//     payload: data
//   }
// } // end of dontHaveIngredients()

export function saveIngredient(ingredient) {
  // console.log("in saveIngredient: ", ingredient)
  return dispatch => dispatch({
    type: SAVE_INGREDIENT,
    payload: ingredient
  })
} // end of saveIngredient(ingredient)

export function aTest() {
  return {
    type: TEST,
    payload: "a huge butt"
  }
}
