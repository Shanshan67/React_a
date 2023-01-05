import React, { Component } from 'react'
import Footer from './components/Footer'
import List from './components/List'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <div className="todo-header">
              <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
            <List/>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}
