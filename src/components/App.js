import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'
import Filter from './Filter'

class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: hogs,
      filter: {
        nameFilter: "false",
        weightFilter: "false",
        greasedFilter: "false"
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      filter: {
        nameFilter: event.target.nameFilter.value,
        weightFilter: event.target.weightFilter.value,
        greasedFilter: event.target.greasedFilter.value
      }
    })
    this.filterHogs(event)
  }

  filterHogs = (event) => {
    let hogsCopy = hogs
      if (event.target.nameFilter.value === "true") {
          hogsCopy.sort(function(a,b) {
        return a.name.localeCompare(b.name)
        })
      }

      if (event.target.weightFilter.value === "true") {
          hogsCopy.sort(function(a,b) {
        return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        })
      }

      if (event.target.greasedFilter.value === "true") {
          hogsCopy = hogsCopy.filter(function(hog) {
            return (hog.greased === true)
          })
      }


    this.setState({
      hogs: hogsCopy
    })

  }


  render() {
    return (
      <div className="App">
          < Nav />
          < Filter handleSubmit={this.handleSubmit}/>
          < HogsContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
