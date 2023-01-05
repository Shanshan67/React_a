import { nanoid } from 'nanoid';
import React, { Component } from 'react'

export default class Header extends Component {
    handleKeyup = (event) => {
        if(event.target.keyCode !==13) return
        if(event.target.value.trim()===''){
            alert('should act')
            return
        }
        const todoObj={id:nanoid(),name:event.target.value,done:false}
        console.log("444",todoObj)
        this.props.addTodo(todoObj)
    };
  render() {
    return (
      <div>
        <input onKeyUp={this.handleKeyup} type="text" placeholder='your action and enter'/>
      </div>
    )
  }
}
