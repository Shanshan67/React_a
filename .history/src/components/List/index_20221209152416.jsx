import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
  render() {
    
    return (
      <ul class="todo-main">
        <Item/>
      </ul>
    )
  }
}

