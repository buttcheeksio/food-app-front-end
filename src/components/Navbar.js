import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo center" onClick={() => props.history.push('/')}>The Food Bible</a>

        <ul className="right">
          <li><a onClick={() => props.history.push('/new-recipe')}>New Recipe</a></li>
          <li><a onClick={() => props.history.push('/ingredients')}>Ingredients Database</a></li>
          <li><a onClick={() => props.history.push('/my_pantry')}>My Pantry</a></li>

        </ul>
      </div>
    </nav>
  )
} // end of Navbar

const mapStateToProps = (state, props) => {
  return {
    state
  }
} // end of mapStateToProps

export default withRouter(connect(mapStateToProps)(Navbar))
