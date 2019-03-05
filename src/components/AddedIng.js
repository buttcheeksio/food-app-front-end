import React, { Component } from 'react'
import { Input, Row } from 'react-materialize'

const AddedIng = (props) => {

  return (
      <div>
        <Row>
          <p onClick={props.click} className="col s3">{props.data}</p>
        </Row>
      </div>
    )
}

// <Input type="textbox" label="Amount"/>
export default AddedIng
