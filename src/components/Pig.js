import React, {Component} from 'react'



export default class Pig extends Component {

  constructor(){
    super()
  this.state = {
    showDetails: false,
    }
  }

  convertName = () => {
    let jpgName = this.props.pigData.name.toLowerCase().split(" ").join("_")

    return `/hog-imgs/${jpgName}.jpg`
  }

  setToOpposite = () => {
    let opposite = !this.state.showDetails
    this.setState({
      showDetails: opposite
    })

  }

  showDetails = () => {
    if (this.state.showDetails) {
      return <div><p>{this.props.pigData.specialty}</p>
      <p>{this.props.pigData.greased.toString()}</p>
      <p>{this.props.pigData.weight}</p><p>Highest Medel Achieved: {this.props.pigData["highest medal achieved"]}</p></div>
    } else {
      return null
    }
  }


  // funciton
  //   if state.showDetails === false
  //     if true return <p> this.

  render(){
    // console.log(this.convertName())
    return(
      <div>
        <h3>{this.props.pigData.name}</h3>
        <img onClick={this.setToOpposite} src={this.convertName()} />
        {this.showDetails()}
    </div>
    )
  }


}
