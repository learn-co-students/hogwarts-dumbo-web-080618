import React, { Component } from 'react';


class HogCard extends Component {

 state = {
   hog: {...this.props.hog},
   clicked : false
 }

 handleClick = (e) => {
   this.setState({clicked: !this.state.clicked})
   {/*e.target.parentElement.querySelector('div').style.display = e.target.parentElement.querySelector('div').style.display === 'none'
     ? 'block'
     : 'none'*/}

 }

  render() {
    const hogInfo = {...this.state.hog}
    let name = this.state.hog.name.toLowerCase().split(' ').join('_')
    return (
      <div className = "ui four wide column" onClick={this.handleClick}>
      <p>  {this.state.hog.name} </p>

      <img src={`./hog-imgs/${name}.jpg`}/>
      {this.state.clicked &&
        <div id={hogInfo.name}> {/*style={{display:'none'}}*/}
          Name: {hogInfo.name}<br/>
          Specialty: {hogInfo.specialty}<br/>
          Greased: {hogInfo.greased? 'Yes': 'No'}<br/>
          Weight: {hogInfo['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}<br/>
          Highest Medal Achieved: {hogInfo['highest medal achieved']}<br/>

        </div>}
       </div>
    );
  }

}

export default HogCard;