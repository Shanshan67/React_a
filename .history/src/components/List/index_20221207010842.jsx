import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    return (
        <div className="row">
            {
                this.props.users.map((user)=>{

                })
            }
        </div>
    )
  }
}
