import React, { Component } from 'react'
import HOC from './HOCDemo'

export class HOCLabel extends Component {
  render() {
    return (
      <div><h1>HOC Label</h1><h2>Count:{this.props.count}</h2>
      <label onMouseOver={this.props.incrementCount}>Touch here</label></div>
    )
  }
}

export default HOC(HOCLabel)