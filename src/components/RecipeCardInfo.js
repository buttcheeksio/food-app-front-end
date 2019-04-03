import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import IngredientInRecipe from './IngredientInRecipe'


class RecipeCardInfo extends PureComponent {

  // handleFindIngredient = (input) => {
  //   return this.props.ingredients.all.find( ing => {
  //     return ing.id === input.ingredient_id
  //   })
  // }

  handleRenderIngredients = () => {
    return this.props.data.recipe_ingredients.map( ing => {

      let ingredient
      ingredient = this.props.ingredients.all.find( ing2 => {
        return ing2.id === ing.ingredient_id
      })
      console.log(ing)
      return <IngredientInRecipe data={ingredient} measurement={ing} />
    })
  } // end of handleRenderIngredients()

  render() {
    console.log(this.props.data.recipe_ingredients)
    return (
      <div>
        <h2>{this.props.data.name}</h2>
        <img src={this.props.data.image} />
        <p>{this.props.data.description}</p>
        <p>{this.props.data.directions}</p>
        <h5>Ingredients</h5>
        <ul>{this.handleRenderIngredients()}</ul>
      </div>
    )
  } // end of render()
} // end of RecipeCardInfo

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(RecipeCardInfo);
