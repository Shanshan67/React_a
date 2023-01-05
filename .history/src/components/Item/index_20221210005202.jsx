import React, { Component } from 'react'

export default class Item extends Component {
    state ={mouse:false}
    handleTodo = (id) => {
        return (event) => {
            this.props.updateTodo(id,event.target.checked)
        }
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        };
    }

  render() {
    const {id,name,done} = this.props
    return (
      <li onMouseEnter={this.handleMouse(true) onMouseLeave={this.handleMouse(false)} }>
        <label>
            <input type="checkbox" checked={done} onChange={this.handleTodo(id)} />
            <span>{name}</span>
        </label>
        <button>delete</button>
      </li>
    )
  }
}
