import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Ingredient from './Ingredient'

class MyPantry extends PureComponent {

  handleRenderIngs() {
    return (
      this.props.ingUserHas.map( ing => {
        return <Ingredient key={ing.id} data={ing} />
      })
    )
  } // end of handleRenderIngs()

  render() {
    return (
      <div class="container" id="ingredient">
        <br />
        {this.handleRenderIngs()}
      </div>
    )
  } // end of render()
} // end of MyPantry

const mapStateToProps = (state) => {
  return {
    ingUserHas: state.user.ingUserHas
  }
} // end of mapStateToProps

export default connect(mapStateToProps)(MyPantry);
