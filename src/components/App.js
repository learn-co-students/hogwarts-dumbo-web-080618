import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogBrowser from './HogBrowser'

class App extends Component {

  constructor() {
    super()
    this.state = {
      pigs: hogs
    }
  }

  changeFilter = (event) => {
    const searchTerm = event.target.value
    let newArr = [...this.state.pigs]
    newArr.sort(function(a, b){
      // debugger
      if (typeof a[searchTerm] === "string"){
        return a[searchTerm].localeCompare(b[searchTerm])
      } else if (typeof a[searchTerm] === "number"){
        return a[searchTerm] - b[searchTerm];
      } else if (typeof a[searchTerm] === "boolean"){
        return (a[searchTerm] === b[searchTerm]) ? 0: a[searchTerm]? 1 : -1;
      }

    })
    this.setState({
      pigs: newArr
    })

  }


  render() {
    return (
      <div className="App">
          <Nav filterHog={this.changeFilter}/>
          <HogBrowser allHogs={this.state.pigs} />

      </div>
    )
  }
}

export default App;
