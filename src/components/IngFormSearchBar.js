import React, { Component } from 'react'
import { connect } from 'react-redux'
import IngToAdd from './IngToAdd'
import AddedIng from './AddedIng'
import { Row, Input } from 'react-materialize'

class IngFormSearchBar extends Component {

  // state = {
  //   query: '',
  //   selectedIngs: [],
  //   filteredResults: []
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     query: event.target.value
  //   })
  // } // end of handleChange()
  //
  // handleAddIng = (event) => {
  //   this.setState({
  //     selectedIngs: [
  //       ...this.state.selectedIngs,
  //       {
  //         name: event.target.innerText,
  //         id: event.target.id
  //       }
  //     ]
  //   })
  // } // end of handleAddIng()
  //
  // handleRenderSelectedIng = () => {
  //   return this.state.selectedIngs.map( ing => {
  //     return <AddedIng key={ing.name} data={ing} />
  //   })
  // } // end of handleRenderSelectedIng()
  //
  // handleRenderIngList = (input) => {
  //   let filteredResults = input.ingredients.all.filter(ingredient => {
  //     return ingredient.name.toLowerCase().indexOf(this.state.query) !== -1
  //   })
  //   return (
  //     filteredResults.map( ing => {
  //       return <IngToAdd key={ing.id} click={this.handleAddIng} data={ing} />
  //   }))
  // } // end of handleRenderIngList

  render() {

    return (
      <div>
        <input
          ref={search => this.search = search}
          placeholder="Search for ingredients..."
          type="search"
          onChange={this.props.handleChangeQuery}
        />


      </div>
    ) // end of return
  } // end of render()

} // end of ingFormSearchBar

// const mapStateToProps = (state) => {
//   return {
//     ingredients: state.ingredients
//   }
// } // end of mapStateToProps

// const mapActionsToProps = {
//   saveIngredient: saveIngredient
// } // end of mapActionsToProps

export default connect(null)(IngFormSearchBar)
