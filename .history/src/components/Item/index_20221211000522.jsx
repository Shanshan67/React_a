import React, { Component } from 'react'

export default class Item extends Component {
    state={mouse:false}
    handleMouse = (flag) => {
        this.setState({ mouse:flag  });
    }
    handleTodo = (id) => {
        return (event) => {
            this.props.updateTodo(id,event.target.checked)
        }
    }
    handleDelete = (id) => {
        return () => {
            this.props.deleteTodo(id)
        }
    }
  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
        <label>
            <input type="checkbox" checked={done} onChange={this.handleTodo(id)} />
            <span>{name} </span>
        </label>
        <button onClick={this.handleDelete(id)} style={{display:mouse ? 'block':'none'}}>delete</button>
      </li>
    )
  }
}
