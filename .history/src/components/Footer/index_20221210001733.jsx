import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <label>
            <input type="checkbox" />
        </label>
        <span>
        <span>done</span>/total
        </span>
        <button>delete</button>
      </div>
    )
  }
}
