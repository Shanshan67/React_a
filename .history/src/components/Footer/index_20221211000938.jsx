import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <label>
            <input type="checkbox" />
            <span>done</span>/total
        </label>
        <button>clear</button>
      </div>
    )
  }
}
