import React from "react"

const divStyle = {
  display: "none"
}


export default class PigCards extends React.Component {

  state = {
    itemArray:[],
    toggleButton:false
  }



  snakeCase(name) {
    let myString =  name.replace(/ /g, "_")
    return myString.toLowerCase()
  }

  handleClick = () => {
      const item = this.state.itemArray
      const name = this.props.onePig.name
      const weight = this.props.onePig.weight
      const medal = this.props.onePig.medal
      const greased = this.props.onePig.greased.toString()
      const specialty = this.props.onePig.specialty
      item.push({name,weight,medal,greased,specialty})
      this.setState({itemArray:item})
  }

  render() {
    return (
      <div>
        <h1> Name: {this.props.onePig.name} </h1>
        <img src={`./hog-imgs/${this.snakeCase(this.props.onePig.name)}.jpg`} />
        <br></br><button onClick={this.handleClick}>OINK!!!!!</button>
        {this.state.itemArray.map((item) => {
          return(
            <div key={item.name}>
              <div>
                <p>Weight: {item.weight}</p>
                <p>Medal: {item.medal}</p>
                <p>Greased: {item.greased}</p>
                <p>Specialty: {item.specialty}</p>
              </div>
            </div>

        )})}
          <div>

          </div>
      </div>
    )
  }
}
