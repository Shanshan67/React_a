import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div class="container">
        <Search/>
        <div class="row">
          <div class="card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style='width: 100px'/>
            </a>
            <p class="card-text">reactjs</p>
          </div>
        </div>
      </div>
    )
  }
}

