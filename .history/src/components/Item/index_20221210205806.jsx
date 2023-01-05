import React, { Component } from 'react'

export default class Item extends Component {
    state = {mouse:false}
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        }
    }

  render() {
    const {mouse} = this.state
    const {id,name,done} = this.props
    return (
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
        <label>
            <input type="checkbox" checked={done} />
            <span>xxx</span>
        </label>
        <button style={{display:mouse ? 'block' : 'none'}}>Delete</button>
      </li>
    )
  }
}
