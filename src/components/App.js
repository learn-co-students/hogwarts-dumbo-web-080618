import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Filter from './Filter'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs
    }
  }

  handleFilterChange = (e) => {
    const value = e.target.value
    this.setState({sortedBy: value})
    if (value === "name"){
      return this.state.hogs.sort(function(a,b){
        return (a.name).localeCompare(b.name)
      })
    }
    else if (value === "weight"){
      this.state.hogs.sort(function(a,b){
        return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      })
    }
  }

  handleHogCheck = (e) => {

    const greasedHogs = [...this.state.hogs].filter(function(hog){
      return hog.greased === true
    })
    e.target.checked  ? this.setState({hogs: greasedHogs}) : this.setState({hogs: hogs})
  }

  handleHide = (e) => {
    e.target.parentElement.style.display = "none" 
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter hogs={this.state.hogs} handleFilterChange={this.handleFilterChange} handleHogCheck={this.handleHogCheck}/>
          < HogContainer hogs={this.state.hogs} handleHide={this.handleHide}/>
      </div>
    )
  }
}

export default App;
