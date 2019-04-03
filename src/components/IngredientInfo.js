import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class IngredientInfo extends PureComponent {

  render() {
    return (
      <div>
        {this.props.owned ? <h5>You currently own this ingredient!</h5> : null}
        {this.props.data.aisle ? <p>Type: {this.props.data.aisle}</p> : null}
        {this.props.data.season ? <p>Season: {this.props.data.season}</p> : null}
        {this.props.data.taste ? <p>Taste: {this.props.data.taste}</p> : null}
        {this.props.data.techniques ? <p>Techniques: {this.props.data.techniques}</p> : null}
        {this.props.data.tips ? <p>Tips: {this.props.data.tips}</p> : null}
      </div>
    )
  } // end of render()
} // end of IngredientInfo

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps

export default connect(mapStateToProps)(IngredientInfo);
