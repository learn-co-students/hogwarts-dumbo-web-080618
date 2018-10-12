import React from "react"
import PigCards from "./Pigcards"


export default class PigContainer extends React.Component {
  render() {
    const pigs = this.props.hogArray.map(hog => {
      return <PigCards key={hog.name} onePig={hog} />
    })
    return <div> {pigs} </div>
  }
}
