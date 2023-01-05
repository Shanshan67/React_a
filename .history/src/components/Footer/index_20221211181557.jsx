import React, { Component } from 'react'

export default class Footer extends Component {
    handleAll = (event) => {
        this.props.allTodos(event.target.checked)
    }

    handleDone = () => {
        this.props.allDone()
    }
  render() {
    const {todos} = this.props
    const total = todos.length 
    const doneCount = todos.reduce((pre,current)=>pre+(current.done ? 1 : 0),0)
    return (
      <div>
        <label>
            <input type="checkbox" checked={total===doneCount && total !==0} onChange={this.handleAll} />
        </label>
        <span>
            <span>done{doneCount} </span>/total{total}
        </span>
        <button onClick={this.handleDone}>clear</button>
      </div>
    )
  }
}
