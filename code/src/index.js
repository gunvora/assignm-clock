import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    console.log("Will Unmount")
    clearInterval(this.timerID)
  }

  stopClock = () => {
    clearInterval(this.timerID)
  }

  restartClock = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <div className="buttons">
          <button onClick={this.stopClock}>
          Pause!
          </button>
          <button onClick={this.restartClock}>
          Restart!
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
)
