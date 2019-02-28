import React, { Component } from 'react'
import { Card } from 'react-materialize'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { saveIngredient } from '../actions/ingredientsActions'

class IngredientCard extends Component {
  render() {
    return (
      <div>
        <Card className="teal lighten-4 black-text" onClick={() => this.props.saveIngredient(this.props.data)}>
          <span>{this.props.data.name}</span>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps

const mapActionsToProps = {
  saveIngredient: saveIngredient
} // end of mapActionsToProps


export default connect(mapStateToProps, mapActionsToProps)(IngredientCard);
