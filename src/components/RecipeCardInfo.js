import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// import { Card, CardTitle } from 'react-materialize'

class RecipeCardInfo extends Component {
  render() {
    // console.log(this.props.data)
    return (
      <div>
        {this.props.data.description}
      </div>
    )
  } // end of render()
} // end of RecipeCardInfo

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(RecipeCardInfo);
