import { nanoid } from 'nanoid';
import React, { Component } from 'react'

export default class Header extends Component {
    handleKeyup = (e) => {
        const todoObj={id:nanoid(),name:,done:false}
        this.props.addTodo(todoObj)
    };
  render() {
    return (
      <div>
        <input type="text" placeholder=''/>
      </div>
    )
  }
}
