import React, { Component } from 'react'

export default class Footer extends Component {
  

  render() {
    const {todos} = this.props
    const countDone =todos.reduce((pre,current)=>pre+(current.done ? 1:0),0)
    const total =todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleAll}/>
        </label>
        <span>
          <span>已完成{countDone} </span> / 全部{total}
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}

