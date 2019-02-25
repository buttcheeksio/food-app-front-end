import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { updateUser } from './actions/userActions'
import { apiRequest } from './actions/ingredientsActions'
import { bindActionCreators } from 'redux'
import IngredientsContainer from './components/IngredientsContainer'


class App extends Component {
  constructor(props) {
    super(props)

    // this.onUpdateUser = this.onUpdateUser.bind(this)
  } // end of constructor

  componentDidMount() {
    this.props.onApiRequest()
  } // end of componentDidMount()

  // onUpdateUser(event) {
  //   this.props.onUpdateUser(event.target.value)
  // } //

  render() {
    return (
      <div className="App">
        <IngredientsContainer />
      </div>
    );
  } // end of render()

} // end of class App

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    ingredients: state.ingredients
  }
} // end of mapStateToProps

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
} // end of mapActionsToProps

export default connect(mapStateToProps, mapActionsToProps)(App);
