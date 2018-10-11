import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import Filter from './Filter'
import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super()

    this.state = {
      hogs: hogs,
      filter: "all"
    }
  }

  onChangeType = (changeType) =>{
    const newHogList = this.filterHogs(changeType)
    this.setState({
      hogs:newHogList,
      filter:changeType
    })
  }

  filterHogs = (filter) =>{
    if(filter === 'name'){
      return hogs.sort(function(a,b) {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      })
    }
    if(filter === 'weight'){
      return hogs.sort(function(a,b) {
        return b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];
      })
    }
    if(filter === 'greased'){
      return hogs.filter(hog => hog.greased)
    }
    else{
      return hogs
    }
  }

  render() {
    console.log(this.state.filter)
    return (
      <div className="App">
        < Nav />
        < Filter onChangeType={this.onChangeType}/>
        < HogList hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
