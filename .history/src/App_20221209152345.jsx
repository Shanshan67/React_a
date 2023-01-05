import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  
  render() {
    const {todos} = this.state
    return (
      <div class="todo-container">
        <div class="todo-wrap">
          <Header/>
          <List/>
          <div class="todo-footer">
            <label>
              <input type="checkbox"/>
            </label>
            <span>
              <span>已完成0</span> / 全部2
            </span>
            <button class="btn btn-danger">清除已完成任务</button>
          </div>
        </div>
      </div>
    )
  }
}

