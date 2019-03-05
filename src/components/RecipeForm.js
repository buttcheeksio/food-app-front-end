import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRecipe } from '../actions/recipesActions'
import { Button, Input, Row } from 'react-materialize'
import IngFormSearchBar from './IngFormSearchBar'
import IngToAdd from './IngToAdd'
import AddedIng from './AddedIng'
// import { AddedIng } from './AddedIng'

class RecipeForm extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      selectedIngs: [],
      newRecipe: {
        name: "",
        description: "",
        directions: "",
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false

      }
    }
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
      name: this.state.newRecipe.name,
      description: this.state.newRecipe.description,
      directions: this.state.newRecipe.directions,
      vegetarian: this.state.newRecipe.vegetarian,
      vegan: this.state.newRecipe.vegan,
      glutenFree: this.state.newRecipe.glutenFree,
      dairyFree: this.state.newRecipe.dairyFree
    })
  })
  .then( res => res.json())

}

handleChange = (event) => {
  let newRecipe = {...this.state.newRecipe}
  newRecipe[event.target.name] = event.target.value
  this.setState({newRecipe})
} // end of handleChange()

handleClick = (event) => {
  let newRecipe = {...this.state.newRecipe}
  newRecipe[event.target.name] = !newRecipe[event.target.name]
  this.setState({newRecipe})
} // end of handleClick()

handleSubmit = event => {
  event.preventDefault()
  this.props.createRecipe(this.state.newRecipe)
} // end of handleSubmit()

handleChangeQuery = (event) => {
  this.setState({
    query: event.target.value
  })
  // console.log("lol")
} // end of handleChange()

handleAddIng = (event) => {
  this.setState({
    selectedIngs: [
      ...this.state.selectedIngs,
      event.target.innerText
    ]
  })
} // end of handleAddIng()

handleRenderSelectedIng = () => {
  return this.state.selectedIngs.map( ing => {
    return <AddedIng key={ing} data={ing} />
  })
} // end of handleRenderSelectedIng()

handleRenderIngList = () => {
  let filteredResults = this.props.ingredients.all.filter(ingredient => {
    return ingredient.name.toLowerCase().indexOf(this.state.query) !== -1
  })
  // console.log(filteredResults)
  return (
    filteredResults.map( ing => {
      return <IngToAdd key={ing.id} click={this.handleAddIng} data={ing} />
      // return <p>{ing.name}</p>
  }))
} // end of handleRenderIngList()

  render() {
    // console.log(this)
    return(
      <form onSubmit={event => this.handleCreateRecipe(event)}>
        <Input s={6} name="name" label="Recipe Name" type="text" onChange={this.handleChange} value={this.state.newRecipe.name} />
        <Input name="description" label="Description" type="textarea" onChange={this.handleChange} value={this.state.newRecipe.description} />
        <Input name="directions" label="Directions" type="textarea" onChange={this.handleChange} value={this.state.newRecipe.directions} />

        <Row>
          <Input name='vegetarian' type='checkbox' value='vegetarian' label='Vegetarian' checked={this.state.newRecipe.vegetarian} onChange={this.handleClick}/>
          <Input name='vegan' type='checkbox' value='vegan' label='Vegan' checked={this.state.newRecipe.vegan} onChange={this.handleClick}/>
          <Input name='glutenFree' type='checkbox' value='glutenFree' label='Gluten-Free' checked={this.state.newRecipe.glutenFree} onChange={this.handleClick}/>
          <Input name='dairyFree' type='checkbox' value='dairyFree' label='Dairy-Free' checked={this.state.newRecipe.dairyFree} onChange={this.handleClick}/>
          <Button type="submit">Submit</Button>
        </Row>
        {this.handleRenderSelectedIng()}
        <IngFormSearchBar
          handleChangeQuery={this.handleChangeQuery}
          handleAddedIng={this.handleAddedIng}
          handleRenderSelectedIng={this.handleRenderSelectedIng}
          handleRenderIngList={this.handleRenderIngList}
        />

          <Row>
            { /* this will have to be a map over the ingredients added */ }
            {this.handleRenderIngList()}

          </Row>

      </form>

    )
  }
} // end of render()

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    ingredients: state.ingredients
  }
} // end of mapStateToProps

const mapActionsToProps = {
  createRecipe: createRecipe
} // end of mapActionsToProps

export default connect(mapStateToProps, mapActionsToProps)(RecipeForm)
