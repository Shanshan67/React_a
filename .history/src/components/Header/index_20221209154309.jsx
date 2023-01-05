import React, { Component } from 'react'


export default class Header extends Component {
    handleKeyUp = () => {
         
    };
  render() {
    return (
        <div className="todo-header">
            <input ref={c=>this.keyWord=c} onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    )
  }
}
