import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

class App extends Component {

  render() {
    console.log(hogs)
    return (
      <div className="App">
          < Nav />
          < HogBrowser allHogs={getHogs}/>

      </div>
    )
  }
}

export default App;
