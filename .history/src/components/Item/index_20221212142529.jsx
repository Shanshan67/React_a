import React, { Component } from 'react'

export default class Item extends Component {
    handleCheck = (id) => {
        return (event) => {
            this.props.checkTodo(id,event.target.checked)
        }
    }
  render() {
    const {id,name,done} =this.props
    return (
        <li>
            <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
            </label>
        </li>
    )
  }
}
