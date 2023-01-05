import React, { Component } from 'react'

export default class Item extends Component {
    state={mouse:false}

    handleMouse = (flag) => {
        return (event) => {
             
        }
    }


  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
        <li style={{backgroundColor=mouse ? "#ddd" : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
                <input type="checkbox"/>
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{display:"none"}}>删除</button>
        </li>
    )
  }
}

