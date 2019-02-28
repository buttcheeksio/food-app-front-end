import React from 'react'

import { Row } from 'react-materialize'

import IngredientsContainer from './IngredientsContainer'
import SavedIngredientsContainer from './SavedIngredientsContainer'
// import UserIngredientsContainer from './UserIngredientsContainer'

const MyIngredientsPage = () => {
  return (
    <div className="container">
      <h4 className="center">My Ingredients</h4>
      <Row>
        <div className="col s3">
          <IngredientsContainer />
        </div>

        <div className="col s6">
          <SavedIngredientsContainer />
        </div>
      </Row>
    </div>
  )
} // end of MyIngredientsPage()

export default MyIngredientsPage
