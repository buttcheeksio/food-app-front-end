import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import IngFormSearchBar from './IngFormSearchBar'
import Ingredient from './Ingredient'
import { Row } from 'react-materialize'
import { withRouter } from 'react-router-dom'


class IngredientCollection extends PureComponent {

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
  } // end of handleChange()

  handleRenderIngList = () => {
    let filteredResults = this.props.ingredients.all.filter(ingredient => {
      return ingredient.name.toLowerCase().indexOf(this.state.query) !== -1
    })
    return (
      filteredResults.map( ing => {
        return <Ingredient key={ing.id} click={this.handleAddIng} data={ing} />
    }))
  } // end of handleRenderIngList()

  render() {
    return (
      <div class="container">
        <IngFormSearchBar handleChangeQuery={this.handleChangeQuery} />
        <div id="ingredient">
          {this.handleRenderIngList()}
        </div>
      </div>
    )
  } // end of render()
} // end of IngredientCollection

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    ingredients: state.ingredients
  }
} // end of mapStateToProps


export default withRouter(connect(mapStateToProps)(IngredientCollection))
