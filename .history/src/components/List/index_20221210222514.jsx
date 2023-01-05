import React, { Component } from 'react'

export default class List extends Component {
    
  render() {
    const {}=this.props
    return (
      <div>
        <ul>
            {
                users.map((user) => {
                    return <li key={user.id}></li>
                })
            }
        </ul>
      </div>
    )
  }
}
