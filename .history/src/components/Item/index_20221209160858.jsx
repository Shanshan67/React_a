import React, { Component } from 'react'

export default class Item extends Component {
    state={mouse:false}

    handleMouse = (flag) => {
        return (event) => {
             
        }
    }


  render() {
    const {id,name,done} = this.props
    return (
        <li onMouseEnter={this.handleMouse(true)} >
            <label>
                <input type="checkbox"/>
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{display:"none"}}>删除</button>
        </li>
    )
  }
}

