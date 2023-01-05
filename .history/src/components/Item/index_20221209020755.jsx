import React, { Component } from 'react'

export default class Item extends Component {
    state = {mouse:false}
  render() {
    const {id,name,done} = this.props
    const {state} = this.state
    return (
        <li style={{backgroundColor:mouse ? '#ddd' : 'white'}}>
            <label>
                <input type="checkbox"/>
                <span>xxxxx</span>
            </label>
            <button className="btn btn-danger" style={{display:mouse ? 'block' :"none"}}>删除</button>
        </li>
    )
  }
}

