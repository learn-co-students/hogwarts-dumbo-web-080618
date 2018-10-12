import React from "react"


export default class Filter extends React.Component {
  state = {
    box: false
  }

  handleChange = (event) => {
    this.props.takeInfo(event.target.value)
  }

  handleGrease = (event) => {
    const onOff = !this.state.box
    this.setState({
      box: onOff
    })
    this.props.takeGrease(onOff)
  }

  render(){
    return ( <div>

      <select onChange={this.handleChange}>
        <option value="all">---Choose One---</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>

      <label> Greased?
      <input type="checkbox" onChange={this.handleGrease} value={this.state.box}/>
      </label>
    </div>
  )
  }
}
