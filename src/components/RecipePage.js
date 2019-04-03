import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import IngredientInRecipe from './IngredientInRecipe'
import RecipeCardInfo from './RecipeCardInfo'


class RecipePage extends PureComponent {

  state = {
    recipe: null
  }

  render() {
    // console.log(this.props.recipes)
    let recipe = this.props.recipes.find( rec => {
      return rec.id == this.props.match.params.id
    })

    this.setState({ recipe })

    return (
      <div class="container">
        {this.state.recipe ? <RecipeCardInfo data={this.state.recipe} /> : "loading..."}
      </div>
    )
  } // end of render()
} // end of RecipePage

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(RecipePage);
