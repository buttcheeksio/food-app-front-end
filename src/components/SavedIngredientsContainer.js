import React, { PureComponent } from 'react'
import IngredientCard from './IngredientCard'
import { clearIngredients, changeClicked  } from '../actions/ingredientsActions'
import { connect } from 'react-redux'
import { Button, Row } from 'react-materialize'

const userIngURL = `http://localhost:3000/api/v1/user_ingredients/`

class SavedIngredientsContainer extends PureComponent {


  renderIngredients = () => {
      return this.props.ingredients.all.map( ingredient => {
        if (ingredient.clicked === true){
        return  <IngredientCard key={ingredient.id} data={ingredient} changeClicked={() => this.props.changeClicked(ingredient.id)} />
      }
    })
  } // end of renderSavedIngredients()

  createUserIngredients = () => {
    fetch(userIngURL, {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.user.id,
        ingredients_ids: this.props.ingredients.all
        .filter(ing => {return ing.clicked})
        .map( ing => {return ing.id} )
      })
    })
    .then( res => res.json() )
    .then( this.props.clearIngredients() )
  } // end of createUserIngredients()

  render() {
    return (
      <div>
        <Button onClick={() => this.createUserIngredients()}>Save</Button>
        <br/>
        <div>
          { this.renderIngredients() }
        </div>
      </div>
    )
  } // end of render()
} // end of SavedIngredientsContainer

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps

const mapActionsToProps = {
  clearIngredients: clearIngredients,
  changeClicked: changeClicked
} // end of mapActionsToProps

export default connect(mapStateToProps, mapActionsToProps)(SavedIngredientsContainer);
