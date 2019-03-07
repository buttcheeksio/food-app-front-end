import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Input } from 'react-materialize'

class IngFormSearchBar extends PureComponent {

  render() {
    return (
      <div>
        <Input
          ref={search => this.search = search}
          label="Search for ingredients..."
          type="search"
          onChange={this.props.handleChangeQuery}
        />
      </div>
    ) // end of return
  } // end of render()

} // end of ingFormSearchBar


export default connect(null)(IngFormSearchBar)
