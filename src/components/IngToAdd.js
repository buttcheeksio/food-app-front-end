import React, { PureComponent } from 'react'
import { Chip } from 'react-materialize'

class IngToAdd extends PureComponent {
  state = {
    hideItem: false
  }


  handleClick = (event) => {
    this.setState({ hideItem: !this.state.hideItem })
    this.props.click(event)
  }

  render() {
    // console.log("IngToAdd")
    return (
      <p
        onClick={(event) => this.handleClick(event)}
        hidden={this.state.hideItem}
        className="col s2"
        id={this.props.data.id}
      >
      {this.props.data.name}
    </p>
    )
  }
}

export default IngToAdd
