import $ from 'jquery'

export const UPDATE_USER = 'users:updateUser'
export const SHOW_ERROR = 'users:showError'
export const GET_USERS_INGREDIENTS = 'GET_USERS_INGREDIENTS'


export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  }
} // end of updateUser(newUser)

export function showError() {
  return {
    type: 'SHOW_ERROR',
    payload: {
      user: 'ERROR!!'
    }
  }
} // end of showError()

export function userIngAPIRequest(url) {
  return dispatch => {
    fetch(url)
    .then( res => res.json() )
    .then( data => {
      dispatch(getUsersIngredients(removeDuplicates(data, 'id')))
      // dispatch(getUsersIngredients(data))
    })
    // .then(console.log(this))
  }
} // end of userIngAPIRequest()

function removeDuplicates(arr, comp) {
  const unique = arr
    .map(e => e[comp])
     // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e])
   return unique
} // removeDuplicates()

function getUsersIngredients(data) {
  return {
    type: GET_USERS_INGREDIENTS,
    payload: data
  }
} // end of getIngredients(data)


export function apiRequest() {
  return dispatch => {
    $.ajax({
      url: 'http://google.com',
      success() {
        console.log('SUCCESS')
      },
      error() {
        console.log('ERROR')

        dispatch(showError())
      }
    })

  } // end of dispatch
} // end of apiRequest()
