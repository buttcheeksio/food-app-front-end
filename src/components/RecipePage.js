import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import IngredientInRecipe from './IngredientInRecipe'
import RecipeCardInfo from './RecipeCardInfo'


class RecipePage extends PureComponent {

  state = {
    recipe: null
  }

  thing = () => {

  }
  // componentDidMount() {
  //   let recipe = this.props.recipes.find( rec => {
  //     return rec.id == this.props.match.params.id
  //   })
  //
  //   this.setState({
  //     recipe: recipe
  //   })
  // }

  render() {
    let recipe = this.props.recipes.find( rec => {
      return rec.id == this.props.match.params.id
    })

    // console.log(this.props)
    this.setState({ recipe })
    // console.log(this.state)

    return (
      <div>

      {this.state.recipe ? <RecipeCardInfo data={this.state.recipe} /> : "loading..."}

      </div>
    )
  } // end of render()
} // end of RecipePage

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(RecipePage);
