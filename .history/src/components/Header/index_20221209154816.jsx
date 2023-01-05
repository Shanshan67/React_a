import { nanoid } from 'nanoid'
import React, { Component } from 'react'


export default class Header extends Component {
    handleKeyUp = (event) => {
        const {keyCode,target} = event
        if(target.value.trim()===''){
            alert('please')
            return
        }
        if(keyCode !== 13) return
        const todoObj ={id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)
        target.value=''
    }

  render() {
    return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    )
  }
}
