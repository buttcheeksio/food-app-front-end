import React, { Component } from 'react'
import { connect } from 'react-redux'
import IngFormSearchBar from './IngFormSearchBar'

class IngredientForm extends Component {

  render() {
    return (
      <div>
        IngredientForm

        <IngFormSearchBar />
      </div>
    )
  }
} // end of IngredientForm

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps

export default IngredientForm
