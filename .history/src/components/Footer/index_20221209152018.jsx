import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class Footer extends Component {
  

  render() {
    return (
      <div class="todo-container">
        <div class="todo-wrap">
          <Header/>
          <ul class="todo-main">
            <li>
              <label>
                <input type="checkbox"/>
                <span>xxxxx</span>
              </label>
              <button class="btn btn-danger" style="display:none">删除</button>
            </li>
            <li>
              <label>
                <input type="checkbox"/>
                <span>yyyy</span>
              </label>
              <button class="btn btn-danger" style="display:none">删除</button>
            </li>
          </ul>
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

