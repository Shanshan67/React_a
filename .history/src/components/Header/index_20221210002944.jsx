import { nanoid } from 'nanoid';
import React, { Component } from 'react'

export default class Header extends Component {
    handleTodo = (event) => {
        const {target,keyCode} = event
        const name = target.value
        if(keyCode !==13) return
        if(target.value.trim()===''){
            alert('should')
            return
        }
        const todoObj={id:nanoid(),name,done:false}
        this.props.addTodo(todoObj)
        target.value=''
    }

  render() {
    return (
      <div>
        <input onKeyUp={this.handleTodo} type='text' placeholder='your action'/>
      </div>
    )
  }
}
