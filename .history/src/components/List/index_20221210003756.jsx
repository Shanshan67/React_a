import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
    const {todos,updateTodo}=this.props
  render() {
    return (
      <ul>
        {
            todos.map((todoObj) => {
                 return <Item key={todoObj.id} {...todoObj} updateTodo={updateTodo} />
            })
        }
      </ul>
    )
  }
}
