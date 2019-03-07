import React, { PureComponent } from 'react'
import IngredientCard from './IngredientCard'
import { changeClicked  } from '../actions/ingredientsActions'
import { connect } from 'react-redux'
import { Row } from 'react-materialize'


class IngredientsContainer extends PureComponent {

  renderIngredients = () => {
    const ingUserHasIDs = this.props.user.ingUserHas.map( ing => ing.id )

    return this.props.ingredients.all.map( ing => {
        if (!ingUserHasIDs.includes(ing.id) && ing.clicked === false) {
          return <IngredientCard key={ing.id} data={ing} changeClicked={() => this.props.changeClicked(ing.id)} />
        }
    })
  } // end of renderIngredients()

  render() {
    return <Row>{ this.renderIngredients() }</Row>
  } // end of render()
} // end of IngredientsContainer

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps

const mapActionsToProps = {
  changeClicked: changeClicked
} // end of mapActionsToProps


export default connect(mapStateToProps, mapActionsToProps)(IngredientsContainer);
