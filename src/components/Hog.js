import React, { Component } from 'react'


export default class Hog extends Component {

  constructor() {
    super()
    this.state = {
      hidden: true
    }
  }

// 309
  pigWeight() {
    return Math.round(309*this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
  }

  snakeCaseName() {
    return this.props.hog.name.split(" ").join("_")
  }

  handlerOnClick = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render() {
    return (
      <div onClick={this.handlerOnClick} className="ui eight wide column">
          <h1>{this.props.hog.name}</h1>
          <img alt={this.props.hog.name} src={`./hog-imgs/${this.snakeCaseName()}.jpg`} />
          {this.state.hidden ? "" : <div><h3> Weight: {this.pigWeight()} lbs. </h3> <h3> Specialty: {this.props.hog.specialty}</h3> <h3> Greased: {this.props.hog.greased ? "Greased" : "Not Greased"}</h3> <h3> Highest Medal Achieved: {this.props.hog['highest medal achieved']}</h3></div> }
       </div>
    )
  }
}
