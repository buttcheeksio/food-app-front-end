// import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
// import { Modal } from 'react-materialize'
// import IngredientInfo from './IngredientInfo'
//
// class IngredientPage extends PureComponent {
//
//   state = {
//     ingredient: null
//   }
//
//   render() {
//     // console.log(this.props.ingredients)
//     let ingredient = this.props.ingredients.all.find( ing => {
//       return ing.id == this.props.match.params.id
//     })
//
//     this.setState({ ingredient })
//
//     return (
//       <div>
//       {this.state.ingredient ? <IngredientInfo data={this.state.ingredient} /> : "loading..."}
//       </div>
//     )
//   } // end of render()
// } // end of IngredientPage
//
// const mapStateToProps = (state) => {
//   return state
// } // end of mapStateToProps
//
// // selectively display ingredient page without information from localhost:3001/ingredients
//
// export default connect(mapStateToProps)(IngredientPage);
