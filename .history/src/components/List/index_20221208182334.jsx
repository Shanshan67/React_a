import React, { Component } from 'react'
import Item from '../Search'
import './index.css'

export default class List extends Component {
  render() {
    const {todos,changeTodo,deleteTodo} = this.props
    return (
        <ul className="todo-main">
            {
            todos.map(todo => {
                return <Item key={todo.id} {...todo} changeTodo={changeTodo} deleteTodo={deleteTodo} />
            })
            }
        </ul>
    )
  }
}
