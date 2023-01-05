import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const {todos}=this.props
    const total = todos.length
    const todoCount = todos.reduce((pre,curren)=>pre+(curren.done ? 1 : 0),0)
    return (
      <div>
        <label>
            <input type="checkbox" checked={todoCount===total && total !== 0} />
        </label>
        <span>
            <span>done{todoCount}</span>/total{total}
        </span>
        <button>clear done</button>
      </div>
    )
  }
}
