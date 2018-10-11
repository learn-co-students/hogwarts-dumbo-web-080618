import React, { Component } from 'react';
import Hog from './Hog'

class HogList extends Component {

  constructor(){
    super()
  }

  render() {
    const hogCard = this.props.hogs.map(hog => <Hog key={hog.name} hog={hog} />)
    return (
      <div className="ui grid container">
        {hogCard}
      </div>
    )
  }

}

export default HogList;
