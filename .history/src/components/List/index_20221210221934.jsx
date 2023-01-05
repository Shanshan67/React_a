import React, { Component } from 'react'
import Item from '../Item/index'

export default class List extends Component {
    
  render() {
    const {}=this.props
    return (
      <div>
        <ul>
            {
                todos.map((todoObj) => {
                    return <Item key={todoObj.id} {...todoObj} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                })
            }
        </ul>
      </div>
    )
  }
}
