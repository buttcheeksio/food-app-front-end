import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-materialize'
import IngredientsContainer from './IngredientsContainer'
import IngFormSearchBar from './IngFormSearchBar'
import SavedIngredientsContainer from './SavedIngredientsContainer'
import UserIngredientsContainer from './UserIngredientsContainer'

class MyIngredientsPage extends PureComponent {

  render() {
    return (
      <Row className="container">

          <Col s={4}>
            <IngredientsContainer />
          </Col>

          <Col s={4}>
            <SavedIngredientsContainer />
          </Col>

          <Col s={4}>
            <UserIngredientsContainer />
          </Col>

      </Row>
    )
  } // end of MyIngredientsPage()
} // end of MyIngredientsPage

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps

export default connect(mapStateToProps)(MyIngredientsPage)
