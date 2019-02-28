import React, { Component } from 'react'
import IngredientCard from './IngredientCard'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { Button } from 'react-materialize'

// const userIngredientsURL = `http://localhost:3000/api/v1/user_ingredients`
class UserIngredientsContainer extends Component {

  renderIngredients = () => {
    if (this.props.user.ingUserHas) {
      return this.props.user.ingUserHas.map( ingredient => {
        return <IngredientCard key={ingredient.id} data={ingredient} />
      })
    }
  } // end of renderSavedIngredients()

  render() {
    // console.log(this.props)
    return (
      <div>
        <h5>Your Saved Ingredients</h5>
        { this.renderIngredients() }

      </div>
    )
  } // end of render()

} // end of UserIngredientsContainer

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(UserIngredientsContainer);
