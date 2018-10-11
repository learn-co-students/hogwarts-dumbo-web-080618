import React, {Component} from 'react'

export default class Filter extends Component {
  constructor(props){
    super(props)
    this.state = {
      sortedBy: undefined,
      onlyGreased: false
    }
  }


  render() {
    return (
      <div>
        <select onChange={this.props.handleFilterChange}>
          <option value="" selected disabled hidden>Filter By Something: </option>
          <option value='weight' >Weight</option>
          <option value='name' >Name</option>
        </select>
        <br/>
        <input onChange={this.props.handleHogCheck} type = "checkbox" name="greased" value='greased'/>Only Greased Pigs
        <br/>
        <br/>
      </div>
    )
  }
}
