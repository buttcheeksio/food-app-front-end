/*
Ingredient
Individual ingredient "chips" that can be clicked to show a
modal that contains more information about that ingredient.
Ingredients that are currently in the user's pantry show as green,
while other ingredients show as grey.

Utilized in /components/IngredientCollection
*/

import React, { PureComponent } from 'react'
import { Chip, Modal, Button } from 'react-materialize'
import IngredientInfo from './IngredientInfo'
import { connect } from 'react-redux'
import { addIngToUserIng, deleteUserIng } from '../actions/ingredientsActions'
import { userIngAPIRequest } from '../actions/userActions'

const userIngURL = `http://localhost:3000/api/v1/user_ingredients/`

class Ingredient extends PureComponent {

  constructor() {
    super()
    this.state = {
      owned: false
    } // end of this.state
  } // end of constructor()

  componentDidMount() {
    /*
    This changes this.state.owned to TRUE or FALSE depending on
    if the user already owns a particular ingredient.
    */
    var found = false;
    for (var i = 0; i < this.props.user.ingUserHas.length; i++) {
      if (this.props.user.ingUserHas[i].name == this.props.data.name) {
        found = true;
        break;
      }
    }
    this.setState({ owned: found })
  } // end of ComponentDidMount()

  handleIfOwnedByUser = () => {
    /*
    This changes the color of the Chip being displayed
    based on whether or not the user currently owns it.
    */
    if (this.state.owned) {
      return <Chip className="col s5 teal">{this.props.data.name}</Chip>
    } else {
      return <Chip className="col s5">{this.props.data.name}</Chip>
    }
  } // end of handleIfOwnedByUser()

  handleAddIng = () => {
    /*
    This will call the reducer to CREATE this userIngredient
    */
    this.props.addIngToUserIng(this.props.user.id, this.props.data)
    this.setState({ owned: true })
  } // end of handleAddIng()

  handleRemoveIng = () => {
    /*
    This will call the reducer to DELETE this userIngredient
    */
    this.props.deleteUserIng(this.props.user.id, this.props.data)
    this.setState({ owned: false })
  } // end of handleRemoveIng()

  render() {
    return (
      <div class="ingredient-card">
        <Modal
          key={this.props.data.id}
          header={this.props.data.name}
          trigger={this.handleIfOwnedByUser()}
          actions=<Button>Close</Button>
        >
          <IngredientInfo data={this.props.data} owned={this.state.owned} />
          {
            this.state.owned ?
            <Button onClick={() => this.handleRemoveIng()}>Remove Ingredient from My Pantry</Button> :
            <Button onClick={() => this.handleAddIng()}>Add Ingredient to My Pantry</Button>
          }
        </Modal>
      </div>
    )
  } // end of render()
} // end of Ingredient

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    ingredients: state.ingredients
  }
} // end of mapStateToProps

const mapActionsToProps = {
  addIngToUserIng: addIngToUserIng,
  deleteUserIng: deleteUserIng,
  userIngAPIRequest: userIngAPIRequest
} // end of mapActionsToProps

export default connect(mapStateToProps, mapActionsToProps)(Ingredient);
