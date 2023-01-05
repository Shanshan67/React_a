import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
  render() {
    return (
      <ul>
        {
            todos.map((todoObj) => {
                 return <Item key={todoObj.id} {...todoObj} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            })
        }
      </ul>
    )
  }
}
