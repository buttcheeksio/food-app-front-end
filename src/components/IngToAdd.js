import React, { Component } from 'react'
import { Input } from 'react-materialize'

const IngToAdd = (props) => {

  // const options = props.data.map(ing => (
  //   <li key={ing.id}>
  //     {ing.name}
  //   </li>
  // ))
  return <p onClick={props.click} className="col s3">{props.data.name}</p>
}

export default IngToAdd
