import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { BrowserRouter as Router, Route, Link, NavLink, withRouter, Switch } from "react-router-dom"
import { withRouter, Route } from "react-router-dom"

import { ingredientAPIRequest } from './actions/ingredientsActions'
import { recipeAPIRequest } from './actions/recipesActions'
import { userIngAPIRequest } from './actions/userActions'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import MyRecipesPage from './components/MyRecipesPage'
import MyIngredientsPage from './components/MyIngredientsPage'

const ingURL = `http://localhost:3000/api/v1/ingredients`
const userIngURL = `http://localhost:3000/api/v1/user_ingredients/1` // this is HARD CODED to 1


class App extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     all: []
  //   }
  //
  //   // this.onUpdateUser = this.onUpdateUser.bind(this)
  // } // end of constructor

  componentDidMount() {
    this.props.ingredientAPIRequest(ingURL, 'GET_INGREDIENTS')
    this.props.userIngAPIRequest(userIngURL)
    this.props.recipeAPIRequest()
    // this.setState({all: this.props.ingredients.all})
  } // end of componentDidMount()

  componentDidUpdate() {
    this.props.userIngAPIRequest(userIngURL)
  }

  render() {
    // this.setState({all: this})
    // console.log(this)
    return (

          <div className="App">
            <Navbar />
              <Route exact path='/' component={Home} />
              <Route path='/my-recipes' component={MyRecipesPage} />
              <Route path='/my-ingredients' component={MyIngredientsPage} />
              <Route path='/about' component={About} />
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
  userIngAPIRequest: userIngAPIRequest
} // end of mapActionsToProps

export default withRouter(connect(mapStateToProps, mapActionsToProps)(App))
