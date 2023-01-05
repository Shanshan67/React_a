import React, { Component } from 'react'

export default class Footer extends Component {
    handleClear = () => {
        this.props.clearTodosDone()
    }
  render() {
    const {todos,}=this.props
    const total = todos.length
    const doneCount = todos.reduce((pre,current)=>pre+(current.done ? 1 : 0),0)
    return (
      <div>
        <label>
            <input type="checkbox" checked={total===doneCount && total!==0} />
        </label>
        <span>
            <span>done{doneCount} </span>/total{total}
        </span>
        <button onClick={this.handleClear}>clear</button>
      </div>
    )
  }
}
