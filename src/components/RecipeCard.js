import React, { PureComponent } from 'react'
import RecipeCardInfo from './RecipeCardInfo'
import { connect } from 'react-redux'
import { Card, CardTitle, Row, Col } from 'react-materialize'
import { Link } from 'react-router-dom'

class RecipeCard extends PureComponent {

  handleShowMissingIngs = () => {
    let array = []
    this.props.data.recipe_ingredients.map( ingA => {
      this.props.user.ingUserHas.map( ing => {
        if (ing.name === ingA.name)  {
          array.push(ingA)
        }
      })
    })

    let difference = (array.length - this.props.data.recipe_ingredients.length)

    if (difference === 0) {
      return <h5>You have all the ingredients!</h5>
    } else if (difference === -1) {
      return <h5>You are missing one ingredient</h5>
    } else if (difference === -2) {
      return <h5>You are missing two ingredients</h5>
    } else if (difference === -3) {
      return <h5>You are missing three ingredients</h5>
    } else {
      return <h5>You are missing multiple ingredients</h5>
    }
  } // end of handleShowMissingIngs()

  render() {
    console.log(this.props)
    return (
      <div class="recipe-card">
        <Card
          header={
            <CardTitle
              image={this.props.data.image}
              waves='light'
            />
          }
          key={this.props.data.name}
          title={this.props.data.name}
          actions={[<Link to={`/recipe/${this.props.data.id}`}>Click to see this recipe!</Link>]}

        >
          {this.handleShowMissingIngs()}
          {this.props.data.description}
        </Card>
      </div>
    )
  } // end of render()
} // end of RecipeCard

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(RecipeCard);
