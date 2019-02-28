import React, { Component } from 'react'
import RecipeCard from './RecipeCard'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Row } from 'react-materialize'


class RecipesContainer extends Component {

  renderRecipes = () => {
    if (this.props.recipes) {
      return this.props.recipes.map( recipe => {
        return (
          <RecipeCard key={recipe.id} data={recipe} />
        )
      })
    }
  } // end of renderRecipes()

  render() {
    return (
      <div>
        <Row>
          { this.renderRecipes() }
        </Row>
      </div>
    )
  } // end of render()

} // end of RecipesContainer

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(RecipesContainer);
