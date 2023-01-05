import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <li>
        <label>
            <input type="checkbox" />
            <span>x</span>
        </label>
        
      </li>
    )
  }
}
