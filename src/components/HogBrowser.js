import React, {Component} from 'react'
import Pig from './Pig'

export default class HogBrowser extends Component {

  renderPigs = () => {

    return this.props.allHogs.map(hog => <Pig pigData={hog}/>)
  }

  render(){
    return (
      <div>
        {this.renderPigs()}
      </div>

    )
  }


}
