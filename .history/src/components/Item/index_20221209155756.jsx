import React, { Component } from 'react'

export default class Item extends Component {
    

  render() {
    console.log('item',this.props)
    return (
        <li>
            <label>
                <input type="checkbox"/>
                <span>xxxxx</span>
            </label>
            <button className="btn btn-danger" style={{display:"none"}}>删除</button>
        </li>
    )
  }
}

