import React, { PureComponent } from 'react'
import { Card, Chip } from 'react-materialize'
import { connect } from 'react-redux'
import { saveIngredient } from '../actions/ingredientsActions'

class IngredientCard extends PureComponent {

  render() {
    return (
      <div>
        {
          <Chip className="col s5" onClick={() => this.props.changeClicked()}>
            <span>{this.props.data.name}</span>
          </Chip>
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
  saveIngredient: saveIngredient
} // end of mapActionsToProps

export default connect(mapStateToProps, mapActionsToProps)(IngredientCard);
