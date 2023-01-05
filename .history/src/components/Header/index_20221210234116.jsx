import React, { Component } from 'react'

export default class Header extends Component {
    handleKeyup = (event) => {
        const {keyCode,target} = event
        this.props.
    }
  render() {
    return (
      <div>
        <input onKeyUp={this.handleKeyup} type="text" placeholder='enter your action'/>
      </div>
    )
  }
}
