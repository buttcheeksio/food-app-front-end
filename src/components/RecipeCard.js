import React, { PureComponent } from 'react'
import RecipeCardInfo from './RecipeCardInfo'
import { connect } from 'react-redux'
import { Card, CardTitle, Row, Col } from 'react-materialize'
import { Link } from 'react-router-dom'

class RecipeCard extends PureComponent {


  handleMarkRecipes = () => {
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
    }
  } // end of handleMarkRecipes()

  render() {
    return (
      <Row>
        <Col m={8} s={12}>
          <Card
            header={
              <CardTitle
                image={this.props.data.image}
                waves='light'
              />
            }

            title={this.props.data.name}
            actions={[<Link to={`/recipe/${this.props.data.id}`}>Click to see this recipe!</Link>]}

          >
            {this.handleMarkRecipes()}
            {this.props.data.description}
          </Card>
        </Col>
      </Row>
    )
  } // end of render()
} // end of RecipeCard

const mapStateToProps = (state) => {
  return state
} // end of mapStateToProps


export default connect(mapStateToProps)(RecipeCard);
