import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {todos}=this.props
    return (
        <ul>
            {
                todos.map((todo) => {
                    return <li key={todo.id} {...todo}/>
                })
            }
        </ul>
    )
  }
}
