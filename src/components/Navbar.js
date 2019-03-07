import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

const Navbar = (props) => {
  // console.log("in navBar: ", props.history)
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo" onClick={() => props.history.push('/')}>The Food Bible</a>

        <ul className="right">
          <li><a onClick={() => props.history.push('/new-recipe')}>New Recipe</a></li>
          <li><a onClick={() => props.history.push('/my-ingredients')}>My Ingredients</a></li>

        </ul>
      </div>
    </nav>
  )
}


const mapStateToProps = (state, props) => {
  return {
    state
  }
} // end of mapStateToProps

export default withRouter(connect(mapStateToProps)(Navbar))

// onClick pushes to rout

// import withRouter

// onClick run this.props.history.push('/url you're trying to go to')
// not a normal push, taking everything after 3001 and making it what I'm pushing in
// want it to change the path from / to whatever
