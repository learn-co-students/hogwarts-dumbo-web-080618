import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from "./Pigcontainer"
import Filter from "./Filter"
// import images from "../public/hog-imgs"

class App extends Component {
  state = {
    hogArray: hogs
  }

  takeInfo = (arg) => {
    const newArray = this.state.hogArray.slice()
    if(arg === "name") {
      newArray.sort((a,b) => {
        return (a.name).localeCompare(b.name)
      })
    } else if (arg === "weight") {
        newArray.sort((a,b) => {
          return (a.weight)-(b.weight)
        })
      } else if (arg === "all") {
        this.setState({
          hogArray: newArray
        })
      }
    this.setState({
      hogArray: newArray
    })
  }

  takeGrease = (arg) => {
    if(arg === true) {
      const greaseArray = this.state.hogArray.slice()
      const anotherArray = greaseArray.filter((greasePig) => {
        return greasePig.greased === arg
      })
      this.setState({
        hogArray: anotherArray
      })
    } else {
      this.setState({
        hogArray: hogs
      })
    }
    }

  render() {
    return (
      <div className="App">
          < Nav />
        <Filter takeInfo={this.takeInfo} takeGrease={this.takeGrease}/>
        <PigContainer hogArray={this.state.hogArray}/>


      </div>
    )
  }
}

export default App;
