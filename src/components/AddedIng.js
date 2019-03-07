import React, { PureComponent } from 'react'
import { Input, Row, Card, Icon } from 'react-materialize'

class AddedIng extends PureComponent {

  handleData = (event) => {
    const ingData = this.props.data
    const inputData = {
      value: event.target.value,
      type: event.target.name
    }
    this.props.handleAmount(inputData, ingData)
  }

  render() {
    // console.log("lol")
    return (
      <Card>
        <Row>
          <div className="col s3">{this.props.data.name}</div>
          <Input
            name="amount"
            s={2}
            label="Amount"
            onChange={(event) => this.handleData(event, this.props.data)}
          />

          <Input
            name="measurement"
            type='select'
            s={1}
            label="Units"
            defaultValue='tsp'
            onChange={(event) => this.handleData(event)}
          >
            <option value='tsp'>tsp</option>
            <option value='Tbsp'>Tbsp</option>
            <option value='cup'>cup</option>
            <option value='cups'>cups</option>
            <option value='oz'>oz</option>
            <option value='g'>g</option>
            <option value='qt'>qt</option>
            <option value='gal'>gal</option>
            <option value='lb'>lb</option>
          </Input>
          <Icon small>clear</Icon>
        </Row>
      </Card>
    ) // end of return
  } // end of render()
} // end of AddedIng

// <Input type="textbox" label="Amount"/>
export default AddedIng
