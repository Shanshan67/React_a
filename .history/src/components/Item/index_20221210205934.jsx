import React, { Component } from 'react'

export default class Item extends Component {
    state = {mouse:false}
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        }
    }
    handleCheck = (id) => {
        this.props.updateTodo(id)
    }

  render() {
    const {mouse} = this.state
    const {id,name,done} = this.props
    return (
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
        <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
            <span>xxx</span>
        </label>
        <button style={{display:mouse ? 'block' : 'none'}}>Delete</button>
      </li>
    )
  }
}
