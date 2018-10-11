import React, {Component} from 'react';

export default class HogCard extends Component {

  constructor(props){
    super(props)
    this.state = {
      showDetails: false
    }
  }

  handleClick = () => {
    this.setState({showDetails: !this.state.showDetails})
  }

  getImgPath(name){
    let newName = name.toLowerCase().split(' ').join('_')
    return `../hog-imgs/${newName}.jpg`
  }
  render() {
    return (
      <div className = "ui card">
        <h1>{this.props.hog.name}</h1>
        <button onClick={this.props.handleHide}>Hide</button>
        <img  onClick={this.handleClick} src={this.getImgPath(this.props.hog.name)} />
        {this.state.showDetails ?
          <div className = "ui eight wide column hidden">
                    <p>Specialty: {this.props.hog.specialty}</p>
                    <p>Greased: {this.props.hog.greased}</p>
                    <p>Weight??: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
                    <p>Highest Medal: {this.props.hog['highest medal achieved']}</p>
            </div> : ''}
      </div>

    )
  }
}
