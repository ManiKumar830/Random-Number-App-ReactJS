// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  randomNumFunction = () => {
    const random0To100 = Math.ceil(Math.random(0, 100) * 100)

    this.setState({randomNumber: random0To100})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p className="sentence">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.randomNumFunction}
            type="button"
            className="buttonEl"
          >
            Generate
          </button>
          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
