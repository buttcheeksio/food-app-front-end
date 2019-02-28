import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Row } from 'react-materialize'

import IngredientsContainer from './IngredientsContainer'
import SavedIngredientsContainer from './SavedIngredientsContainer'
import UserIngredientsContainer from './UserIngredientsContainer'

class MyIngredientsPage extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     all: []
  //   }
  // } // end of constructor()

  // componentDidMount() {
  //   this.setState({all: ["lol"]})
  // }



  render() {
    // console.log(this.props)
    // console.log(this.state)
    return (
      <div className="container">
        <h4 className="center">My Ingredients</h4>
        <Row>
          <div className="col s3">
            <IngredientsContainer />
          </div>

          <div className="col s3">
            <SavedIngredientsContainer />
          </div>

          <div className="col s3">
            <UserIngredientsContainer />
          </div>
        </Row>
      </div>
    )
  } // end of MyIngredientsPage()
} // end of MyIngredientsPage

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps

export default connect(mapStateToProps)(MyIngredientsPage)
// export default connect(mapStateToProps, mapActionsToProps)(IngredientCard);
