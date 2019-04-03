import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createRecipe } from '../actions/recipesActions'
import { Button, Input, Row, Collection } from 'react-materialize'
import IngFormSearchBar from './IngFormSearchBar'
import IngToAdd from './IngToAdd'
import AddedIng from './AddedIng'
import { withRouter } from 'react-router-dom'

// let filteredResults = []
class RecipeForm extends PureComponent {

  constructor() {
    super()
    this.state = {
      query: '',
      filteredResults: [],
      selectedIngs: [],
      clicked: [],
      newRecipe: {
        name: "",
        description: "",
        directions: "",
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        image: ""
      }
    } // end of this.state
  } // end of constructor()

handleCreateRecipe = (event) => {
  event.preventDefault()

  fetch(`http://localhost:3000/api/v1/recipes`, {
    method: 'post',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      new_recipe: {
        name: this.state.newRecipe.name,
        description: this.state.newRecipe.description,
        directions: this.state.newRecipe.directions,
        vegetarian: this.state.newRecipe.vegetarian,
        vegan: this.state.newRecipe.vegan,
        gluten_free: this.state.newRecipe.glutenFree,
        dairy_free: this.state.newRecipe.dairyFree,
        user_id: this.props.user.id,
        image: this.state.newRecipe.image
      },
      selected_ings: {
        ings: this.state.selectedIngs
      }
    })
  }) // end of fetch
  .then(res => res.json())
  .then( data => {
    this.props.createRecipe(data)
    this.props.history.push(`/recipe/${data.id}`)})
} // end of handleCreateRecipe()

handleChange = (event) => {
  let newRecipe = {...this.state.newRecipe}
  newRecipe[event.target.name] = event.target.value
  this.setState({newRecipe})
} // end of handleChange()

handleClick = (event) => {
  let newRecipe = {...this.state.newRecipe}
  newRecipe[event.target.value] = !newRecipe[event.target.value]
  this.setState({newRecipe})
} // end of handleClick()

handleChangeQuery = (event) => {
  this.setState({
    query: event.target.value
  })

  if (event.target.value.length > 0) {
    this.setState({filteredResults: this.props.ingredients.all.filter(ingredient => {
      return ingredient.name.toLowerCase().indexOf(this.state.query) !== -1})
    })
  } else {
    this.setState({filteredResults: []})
  }
} // end of handleChange()

handleAddIng = (event) => {
  this.setState({
    selectedIngs: [
      ...this.state.selectedIngs,
      {
        name: event.target.innerText,
        ingredient_id: event.target.id,
        amount: "",
        unit: "tsp"
      }
    ]
  })
} // end of handleAddIng()

handleAmount = (input, data) => {
  this.setState(prevState => {
    const thing = prevState.selectedIngs.map( ing => {
      if (ing.name === data.name) {
        ing[input.type] = input.value
        return ing
      } else {
        return ing
      } // end of if
    })
    return { selectedIngs: thing }
  })
} // end of handleAmount()

handleRenderSelectedIng = () => {
  return this.state.selectedIngs.map( ing => {
    return <AddedIng key={ing.id} data={ing} handleAmount={this.handleAmount} han/>
  })
} // end of handleRenderSelectedIng()

handleRenderIngList = () => {
  return (
    this.state.filteredResults.map( ing => {
      return <IngToAdd key={ing.id} click={this.handleAddIng} data={ing} />
    })
  )
} // end of handleRenderIngList()

  render() {

    console.log("RecipeForm.js")

    return (
      <div className="recipe-form">
      <form onSubmit={this.handleCreateRecipe}>
        <div className="recipe-details">
          <Row>
            <Input s={4} name="name" label="Recipe Name" type="text" onChange={this.handleChange} value={this.state.newRecipe.name} />
            <Input s={4} name="image" label="Image URL" type="text" onChange={this.handleChange} value={this.state.newRecipe.image} />
          </Row>
          <Input name="description" label="Description" type="textarea" onChange={this.handleChange} value={this.state.newRecipe.description} />
          <Input name="directions" label="Directions" type="textarea" onChange={this.handleChange} value={this.state.newRecipe.directions} />

          <Row>
            <Input name='vegetarian' type='checkbox' value='vegetarian' label='Vegetarian' checked={this.state.newRecipe.vegetarian} onChange={this.handleClick}/>
            <Input name='vegan' type='checkbox' value='vegan' label='Vegan' checked={this.state.newRecipe.vegan} onChange={this.handleClick}/>
            <Input name='glutenFree' type='checkbox' value='glutenFree' label='Gluten-Free' checked={this.state.newRecipe.glutenFree} onChange={this.handleClick}/>
            <Input name='dairyFree' type='checkbox' value='dairyFree' label='Dairy-Free' checked={this.state.newRecipe.dairyFree} onChange={this.handleClick}/>
            <Button type="submit">Submit</Button>
          </Row>
        </div>

        <div className="ingredients-container">
          <div className="selected-ingredients">
          {this.handleRenderSelectedIng()}
          </div>

          <div className="ingredient-search">
          <IngFormSearchBar
            handleChangeQuery={this.handleChangeQuery}
            handleAddedIng={this.handleAddedIng}
            handleRenderSelectedIng={this.handleRenderSelectedIng}
            handleRenderIngList={this.handleRenderIngList}
          />
        </div>
        </div>

        <Row>
          {this.handleRenderIngList()}
        </Row>
      </form>
      </div>
    ) // end of return
  } // end of render()
} // end of recipeForm

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    ingredients: state.ingredients
  }
} // end of mapStateToProps

const mapActionsToProps = {
  createRecipe: createRecipe
} // end of mapActionsToProps

export default withRouter(connect(mapStateToProps, mapActionsToProps)(RecipeForm))
