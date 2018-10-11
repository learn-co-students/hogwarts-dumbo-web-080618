import React, { Component } from 'react'
import Hog from './Hog'

export default class HogsContainer extends Component {
  // constructor() {
  //   super()
  //   state = {
  //
  //   }
  // }
  render() {

    const hogCards = this.props.hogs.map((hogObj) =>  < Hog key={hogObj.name} hog={hogObj}/>)

    return (
      <div className="ui grid container">
        {hogCards}
       </div>
    )
  }
}
