import React, { Component } from 'react'
import IngredientCard from './IngredientCard'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Row } from 'react-materialize'

const userIngredientsURL = `http://localhost:3000/api/v1/user_ingredients`

class SavedIngredientsContainer extends Component {

  renderIngredients = () => {
    if (this.props.user.ingUserHas) {
      // let uniqueIngredients = [...new Set(this.props.user.ingUserHas)]
      // console.log("uniqueIngredients: ", uniqueIngredients)
      return this.props.user.ingUserHas.map( ingredient => {
        return (
          <IngredientCard key={ingredient.id} data={ingredient} />
        )
      })
    }
  } // end of renderSavedIngredients()

  // renderSavedIngredients = () => {
  //   if (this.props.ingredients.saved) {
  //     return this.props.ingredients.saved.map( ingredient => {
  //       return (
  //         <IngredientCard key={ingredient.id} data={ingredient} />
  //       )
  //     })
  //   }
  // } // end of renderSavedIngredients()

  createUserIngredients = () => {
    fetch(userIngredientsURL, {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.user.id,
        ingredients_ids: this.props.ingredients.saved.map(ingredient => ingredient.id)
      })
    })
    .then( res => res.json() )
  } // end of createUserIngredients()

  // loadUserIngredients = () => {
  //
  //   fetch(userIngredientsURL)
  //   .then( res => res.json() )
  //   .then( ingredients => )
  // } // end of createUserIngredients()

  render() {
    // console.log("in SavedIngredientsContainer: ", this.props.user.ingUserHas)
    return (
      <div>
        <Row>

          <Button onClick={() => this.createUserIngredients()}>Save</Button>

          <div className="col s3">
            <h5>Saved Ingredients</h5>
            { this.renderIngredients() }

          </div>


        </Row>
      </div>
    )
  } // end of render()

} // end of SavedIngredientsContainer

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(SavedIngredientsContainer);
