import React, { Component } from 'react';

class Hog extends Component{
  constructor() {
    super()
    this.state = {
      toggle:false
    }
  }

  findImageName = (name) =>{
    return name.replace(/\s+/g, '_').toLowerCase();
  }

  toggleHogDetail = () => {
    this.setState({toggle:!this.state.toggle})
  }

  render() {
    return (
      <div onClick={this.toggleHogDetail} className="ui eight wide column">
        <h3>{this.props.hog.name}</h3>
        <img src={`./hog-imgs/${this.findImageName(this.props.hog.name)}.jpg`} alt=""/>
        {this.state.toggle ?
          <div>
            <p>specialty: {this.props.hog.specialty}</p>
            <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
            <p>highest medal achieved: {this.props.hog['highest medal achieved']}</p>
          </div>

          : ""
        }
      </div>
    )
  }
}

export default Hog;
