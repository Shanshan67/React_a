import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <li>
        <label>
            <input type="checkbox" />
            <span>xxx</span>
        </label>
        <button>delete</button>
      </li>
    )
  }
}
