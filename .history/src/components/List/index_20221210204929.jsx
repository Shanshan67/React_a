import React, { Component } from 'react'
import Item from '../Item/index'

export default class List extends Component {
    
  render() {
    const {todos}=this.props
    return (
      <div>
        <ul>
            {
                todos.map((todoObj) => {
                     return <Item {...todoObj} />
                })
            }
        </ul>
      </div>
    )
  }
}
