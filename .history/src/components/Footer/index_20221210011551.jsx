import React, { Component } from 'react'

export default class Footer extends Component {
    handleCheckAll = (even) => {
        this.props.checkAllTodos(even.target.checked)
    }

    handleClearDone = () => {
        this.props.clearAllTodo()
    }
  render() {
    const {todos} = this.props
    const doCount = todos.reduce((pre,current)=>pre+(current.done ? 1 : 0),0)
    const total =todos.length
    return (
      <div>
        <label>
            <input onChange={this.handleCheckAll} type="checkbox" checked={total===doCount && total!==0} />
        </label>
        <span>
            <span>done{doCount} </span>/total{total}
        </span>
        <button onClick={this.handleClearDone}>delete</button>
      </div>
    )
  }
}
