import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';

class App extends Component {
  state = {
   hogs: hogs
  }

sortBy = (sortValueKey) => {
  let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
  // 'highest medal achieved'
  let copyHogs = [...hogs]

  if (sortValueKey === 'all'){
     copyHogs = [...hogs]
  }
  else if (sortValueKey === 'name') {
    copyHogs.sort((a, b) => a.name.localeCompare(b.name))
    }
  else if (sortValueKey === 'weight') {
    copyHogs.sort((a, b) =>  b[weight] - a[weight])
  }
  else if (sortValueKey === 'greased') {
    copyHogs = copyHogs.filter(hog => hog.greased)
  }

  this.setState({
    hogs: copyHogs
  })

}

  render() {

    return (
      <div className="App">
          < Nav sortBy={this.sortBy} />
        < HogContainer  hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;