import React, { Component } from 'react'

export default class Header extends Component {
    handleTodo = () => {
        this.props.addTodo(todoObj)
    };
  render() {
    return (
      <div>
        <input onKeyUP type='text' placeholder='your action'/>
      </div>
    )
  }
}
