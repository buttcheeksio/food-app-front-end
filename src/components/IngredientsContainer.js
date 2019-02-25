import React, { Component } from 'react'
import IngredientCard from './IngredientCard'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class IngredientsContainer extends Component {

  renderIngredients = () => {

    if (this.props.ingredients) {
      return this.props.ingredients.map( ingredient => {
        return (
          <IngredientCard data={ingredient}/>
        )
        // console.log(ingredient)
      })
    }

      // console.log(this.props.ingredients)
    // console.log("helo")
  } // end of renderIngredients()

  render() {
    // console.log("in IngredientsContainer :", this.props.ingredients)

    return (
      <div>INGREDIENTS CONTAINER
      { this.renderIngredients() }
      </div>
    )
  } // end of render()
}

// const IngredientsContainer = (props) => {
//   console.log(this.props)
//   return (
//     <div>INGREDIENTS CONTAINER
//
//     </div>
//   )
// }

const mapStateToProps = (state) => {
  // return {
  //
  // }

  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(IngredientsContainer);
