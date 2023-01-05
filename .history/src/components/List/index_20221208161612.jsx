import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
        <ul className="todo-main">
            {
                this.map((todo) => {
                     
                };)
            }
            <Item/>
        </ul>
      </div>
    )
  }
}
