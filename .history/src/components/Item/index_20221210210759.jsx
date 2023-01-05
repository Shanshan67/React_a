import React, { Component } from 'react'

export default class Item extends Component {
    state = {mouse:false}
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        }
    }
    handleCheck = (id) => {
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
    const {mouse} = this.state
    const {id,name,done} = this.props
    return (
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
        <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
            <span>{name}</span>
        </label>
        <button onClick={this.handleDelete(id)} style={{display:mouse ? 'block' : 'none'}}>Delete</button>
      </li>
    )
  }
}
