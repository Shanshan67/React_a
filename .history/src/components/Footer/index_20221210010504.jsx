import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const {todos} = this.props
    const doCount = todos.reduce((pre,current)=>pre+(current.done ? 1 : 0),0)
    const total =todos.length
    return (
      <div>
        <label>
            <input type="checkbox" />
        </label>
        <span>
        <span>done{doCount} </span>/total{total}
        </span>
        <button>delete</button>
      </div>
    )
  }
}
