import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,todo)=>pre+(todo.done ? 1 : 0),0)
    const total = todos.length
    
    handleCheckAll=()=>{
      this.props.checkAllTodo
    }

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===total ? true : false} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
