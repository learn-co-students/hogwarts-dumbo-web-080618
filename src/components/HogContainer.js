import React, { Component } from 'react';
import HogCard from './HogCard';

class HogContainer extends Component {



  render() {
    const hogsComponents = this.props.hogs.map((hog) => {
      return < HogCard key={hog.name} hog={hog} />
    })

    return (
      <div className =  "ui grid container">
      {hogsComponents}

      </div>
    );
  }

}

export default HogContainer;