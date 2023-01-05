import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
  render() {
    const {todos,deleteTodo,handleCheck} = this.props
    return (
        <ul className="todo-main">
            {
                todos.map((todo) => {
                    return <Item key={todo.id} {...todo} deleteTodo={deleteTodo} handleCheck={handleCheck} />
                })
            }
        </ul>
    )
  }
}

