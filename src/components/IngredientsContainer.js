import React, { Component } from 'react'
import IngredientCard from './IngredientCard'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class IngredientsContainer extends Component {

  renderIngredients = () => {
    if (this.props.ingredients.all) {
      return this.props.ingredients.all.map( ingredient => {
        return (
          <IngredientCard key={ingredient.id} data={ingredient} />
        )
      })
    }
  } // end of renderIngredients()

  render() {
    console.log("in ingredientsContainer: ", this.props)
    return (
      <div>
      { this.renderIngredients() }
      </div>
    )
  } // end of render()

} // end of IngredientsContainer

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(IngredientsContainer);
