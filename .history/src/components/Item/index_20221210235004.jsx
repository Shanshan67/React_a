import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const {id,name,done} = this.props
    return (
      <div>
        <label>
            <input type="checkbox" />
            <span>{name} </span>
        </label>
        <button>delete</button>
      </div>
    )
  }
}
