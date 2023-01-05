import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <label>
            <input type="checkbox" />
        </label>
        <span>
            <span>done0</span>/total
        </span>
        <button>clear done</button>
      </div>
    )
  }
}
