import React, { Component } from 'react'

export default class Item extends Component {
    handleTodo = (id) => {
        return (event) => {
            this.props.
        }
    }

  render() {
    const {id,name,done} = this.props
    return (
      <li>
        <label>
            <input type="checkbox" checked={done} onChange={this.handleTodo(id)} />
            <span>{name}</span>
        </label>
        <button>delete</button>
      </li>
    )
  }
}
