

import React, { Component } from 'react'
import HOC from "./HOCDemo";

export class HOCButton extends Component {
  render() {
    return (
      <div>
      <h1>HOC Button</h1>
      <h2>Counter:{this.props.count}</h2>
      <button onClick={this.props.incrementCount}>Click here</button>
      </div>
    )
  }
}

export default HOC(HOCButton);