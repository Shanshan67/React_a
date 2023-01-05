import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div>
            <input type="checkbox" />
            <span>done:0</span>/total
        </div>
        <button>clear done</button>
      </div>
    )
  }
}
