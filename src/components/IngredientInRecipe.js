import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class IngredientInRecipe extends PureComponent {

  render() {
    return (
      <div>
        {this.props.data.name}, {this.props.measurement.amount} {this.props.measurement.unit}
      </div>
    )
  } // end of render()
} // end of IngredientInRecipe

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(IngredientInRecipe);
