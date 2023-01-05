import React, { Component } from 'react'

export default class Search extends Component {
    
  render() {
    return (
      <div>
        <input ref={this.handleName} type="text" placeholder='name'/>
      </div>
    )
  }
}
