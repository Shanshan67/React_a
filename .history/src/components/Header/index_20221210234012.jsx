import React, { Component } from 'react'

export default class Header extends Component {
    handleKeyup = (event) => {
        const {keyCode,target} = event
        console.log(event)
    }
  render() {
    return (
      <div>
        <input onKeyUp={this.handleKeyup} type="text" placeholder='enter your action'/>
      </div>
    )
  }
}
