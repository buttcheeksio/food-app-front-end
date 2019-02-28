import React, { Component } from 'react'
import { Card } from 'react-materialize'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { saveIngredient, changeClicked } from '../actions/ingredientsActions'

class IngredientCard extends Component {

  render() {
    // console.log(this.props)
    // console.log(this.state)
    return (
      <div>
        {
          <Card className="teal lighten-4 black-text" onClick={() => this.props.changeClicked(this.props.data.id)}>
            <span>{this.props.data.name}</span>
          </Card>
        }

      </div>
    )
  } // end of render()

} // end of IngredientCard

const mapStateToProps = (state) => {
  return {
    saved: state.ingredients.saved,
    ingUserHas: state.ingredients.ingUserHas
  }
} // end of mapStateToProps

const mapActionsToProps = {
  saveIngredient: saveIngredient,
  changeClicked: changeClicked
} // end of mapActionsToProps


// onClick={() => this.props.saveIngredient(this.props.data)}
export default connect(mapStateToProps, mapActionsToProps)(IngredientCard);
