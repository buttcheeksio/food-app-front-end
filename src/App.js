import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { withRouter, Route } from "react-router-dom"

import { ingredientAPIRequest } from './actions/ingredientsActions'
import { recipeAPIRequest } from './actions/recipesActions'
import { userIngAPIRequest } from './actions/userActions'
import { recipeIngAPIRequest } from './actions/ingredientsActions'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import MyRecipesPage from './components/MyRecipesPage'
import MyPantry from './components/MyPantry'
import IngredientCollection from './components/IngredientCollection'
import RecipePage from './components/RecipePage'
import IngredientPage from './components/IngredientPage'

const ingURL = `http://localhost:3000/api/v1/ingredients`
const userIngURL = `http://localhost:3000/api/v1/user_ingredients/1` // this is HARD CODED to 1
const recipeIngURL = `http://localhost:3000/api/v1/recipe_ingredients`

class App extends Component {

  componentDidMount() {
    this.props.ingredientAPIRequest(ingURL, 'GET_INGREDIENTS')
    this.props.userIngAPIRequest(userIngURL)
    this.props.recipeAPIRequest()
    this.props.recipeIngAPIRequest(recipeIngURL, 'GET_RECIPE_INGREDIENTS')
    // this.setState({all: this.props.ingredients.all})
  } // end of componentDidMount()

  render() {
    console.log("app ", this.props)
    return (
      <div className="App">
        <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/new-recipe' component={MyRecipesPage} />
          <Route path='/ingredients' component={IngredientCollection} />
          <Route path='/about' component={About} />
          <Route path='/recipe/:id' component={RecipePage} />
          <Route path='/ingredients/:id' component={IngredientPage} />
          <Route path='/my_pantry' component={MyPantry} />
      </div>
    );
  } // end of render()
} // end of class App

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    ingredients: state.ingredients,
    recipes: state.recipes
  }
} // end of mapStateToProps

const mapActionsToProps = {
  ingredientAPIRequest: ingredientAPIRequest,
  recipeAPIRequest: recipeAPIRequest,
  userIngAPIRequest: userIngAPIRequest,
  recipeIngAPIRequest: recipeIngAPIRequest
} // end of mapActionsToProps

export default withRouter(connect(mapStateToProps, mapActionsToProps)(App))

// <Route path='/my-ingredients' component={MyIngredientsPage} />
