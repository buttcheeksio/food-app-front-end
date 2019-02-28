import React, { Component } from 'react'
// import IngredientCard from './IngredientCard'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { Button } from 'react-materialize'

// const userIngredientsURL = `http://localhost:3000/api/v1/user_ingredients`
class UserIngredientsContainer extends Component {

  // renderIngredients = () => {
  //   if (this.props.ingredients.saved) {
  //     return this.props.ingredients.saved.map( ingredient => {
  //       return (
  //         <IngredientCard key={ingredient.id} data={ingredient} />
  //       )
  //     })
  //   }
  // } // end of renderSavedIngredients()

  // renderSavedIngredients = () => {
  //   if (this.props.ingredients.saved) {
  //     return this.props.ingredients.saved.map( ingredient => {
  //       return (
  //         <IngredientCard key={ingredient.id} data={ingredient} />
  //       )
  //     })
  //   }
  // }

  // loadUserIngredients = () => {
  //
  //   fetch(userIngredientsURL)
  //   .then( res => res.json() )
  // } // end of createUserIngredients()

  render() {
    console.log(this.props)
    return (
      <div>
        <h5>Your Saved Ingredients</h5>

      </div>
    )
  } // end of render()

} // end of UserIngredientsContainer

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(UserIngredientsContainer);
