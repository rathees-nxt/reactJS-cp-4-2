// Write your code here
import {Component} from 'react'
import './index.css'

class SpeedoMeter extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-img"
        />
        <h2 className="speed-text">Speed is {count}mph</h2>
        <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="button btn-blue"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="button btn-black"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default SpeedoMeter
