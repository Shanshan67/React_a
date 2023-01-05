import { nanoid } from 'nanoid'
import React, { Component } from 'react'

export default class Header extends Component {
    handleKeyup = (event) => {
        const {keyCode,target} = event
        if(keyCode!==13) return
        if(target.value.trim()===''){
            alert('should')
            return
        }
        const todoObj={id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)
        target.value=''
    }
  render() {
    return (
      <div>
        <input onKeyUp={this.handleKeyup} type="text" placeholder='enter your action'/>
      </div>
    )
  }
}
