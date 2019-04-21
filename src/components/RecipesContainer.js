/*
RecipesContainer
Renders the IngFormSearchBar and RecipeCards (via handleRenderRecipes())
*/

import React, { PureComponent } from 'react'
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'
import { Row, Col } from 'react-materialize'
import IngFormSearchBar from './IngFormSearchBar'

class RecipesContainer extends PureComponent {

  constructor() {
    super()
    this.state = {
      query: ''
    } // end of this.state
  } // end of constructor()

  handleChangeQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  } // end of handleChangeQuery()

  handleRenderRecipes = () => {
    let filteredResults = this.props.recipes.filter( recipe => {
      return recipe.name.toLowerCase().indexOf(this.state.query) !== -1
    })
    return (
      filteredResults.map( recipe => {
        return <RecipeCard key={recipe.id} data={recipe} />
    }))
  } // end of handleRenderIngList()

  render() {
    return (
        <div class="container">
          <IngFormSearchBar handleChangeQuery={this.handleChangeQuery} />
          <div id="recipe">
            { this.handleRenderRecipes() }
          </div>
        </div>
    )
  } // end of render()
} // end of RecipesContainer

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps

export default connect(mapStateToProps)(RecipesContainer);
