import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleCheckAll = (e) => {
        this
    }

    render() {
        const {todos} = this.props
        const doneCount = todos.reduce((pre,current)=>{return current.done ? pre+1 : pre},0)
        const total = todos.length
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===total && total !==0} />
                    </label>
                    <span>
                        <span>已完成{doneCount} </span> / 全部{total}
                    </span>
                    <button className="btn btn-danger">清除已完成任务</button>
                </div>
            </div>
        )
    }
}
