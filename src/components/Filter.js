import React, { Component } from 'react';


export default class Filter extends Component {
  render() {
    return (
      <div style={{marginBottom: "20px"}}>
        <form onSubmit={this.props.handleSubmit}>
          Name Filter:
          <select name="nameFilter">
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
          Weight Filter:
          <select name="weightFilter">
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
          Greased Filter:
          <select name="greasedFilter">
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }
}
