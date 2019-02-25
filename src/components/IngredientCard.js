import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class IngredientCard extends Component {
  render() {
    console.log("in ingredientCard: ", this.props)
    return (
      <div>{this.props.data.name}</div>
    )
  }
}

const mapStateToProps = (state) => {
  // return {
  //
  // }

  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(IngredientCard);
