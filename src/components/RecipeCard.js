import React, { Component } from 'react'
import RecipeCardInfo from './RecipeCardInfo'

import { connect } from 'react-redux'

import { Card, CardTitle } from 'react-materialize'

class RecipeCard extends Component {
  render() {
    return (
      <div>
        <Card
          header={<CardTitle reveal image={this.props.data.image} waves='light'/>}
          title={this.props.data.name}
          reveal={<RecipeCardInfo key={this.props.data.id} data={this.props.data} /> }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(RecipeCard);
