import React, { Component } from 'react'
import IngredientCard from './IngredientCard'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class IngredientsContainer extends Component {

  // componentDidMount() {
  //   this.setState({all: this.props.ingredients})
  // }

  renderIngredients = () => {
    const ingUserHasIDs = this.props.user.ingUserHas.map( ing => ing.id )

    return this.props.ingredients.all.map( ing => {
        if (!ingUserHasIDs.includes(ing.id) && ing.clicked === false) {
          return <IngredientCard key={ing.id} data={ing} />
        }
      }
    )
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
