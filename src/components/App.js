import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogBrowser from './HogBrowser'

class App extends Component {





  render() {
    return (
      <div className="App">
          <Nav />
          <HogBrowser allHogs={hogs} />

      </div>
    )
  }
}

export default App;
