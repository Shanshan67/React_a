import React, { Component } from 'react'

export default class Footer extends Component {
    handleCheck = (event) => {
        this.props.chellAll(event.target.checked)
    }

    handleClear = () => {
        this.props.clearDone()    
    }
  render() {
    const {todos} = this.props
    const total = todos.length
    const doneCount = todos.reduce((pre,current)=>pre+(current.done ? 1:0),0)
    return (
      <div>
        <label>
            <input type="checkbox" checked={doneCount===total && total!==0} onChange={this.handleCheck} />
        </label>
        <span>
            <span>done{doneCount} </span>/total{total}
        </span>
        <button onClick={this.handleClear}>clear</button>
      </div>
    )
  }
}
