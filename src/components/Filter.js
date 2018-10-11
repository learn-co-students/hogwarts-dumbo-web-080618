import React, { Component } from 'react';

class Filter extends Component {
  constructor(){
    super()
  }

  hangleStateChange = (event) => {
    this.props.onChangeType(event.target.value)
  }

  render(){
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.hangleStateChange}>
            <option value="all" >All</option>
            <option value="name">Alphabetical Name</option>
            <option value="weight">Highest Weight First</option>
            <option value="greased">Greased?</option>
          </select>
        </div>
      </div>
      )
  }
}

export default Filter;
