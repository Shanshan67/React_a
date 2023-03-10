import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  render() {
    const {todos,updateTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo=>{
          return <Item key={todo.id} {...todo} updateTodo={updateTodo} />
          })
        }
      </ul>
    )
  }
}
